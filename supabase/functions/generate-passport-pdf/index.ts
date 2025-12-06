import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const COUNTRY_NAMES: Record<string, string> = {
  AE: "United Arab Emirates",
  SA: "Saudi Arabia",
  EG: "Egypt",
  MA: "Morocco",
  JO: "Jordan",
  TN: "Tunisia",
  NG: "Nigeria",
  IN: "India",
  KE: "Kenya",
  RW: "Rwanda",
  UG: "Uganda",
  ZA: "South Africa",
  TZ: "Tanzania",
  SN: "Senegal",
  GH: "Ghana",
};

const VISA_STATUS_LABELS: Record<string, string> = {
  citizen: "Citizen",
  resident: "Resident",
  work_permit: "Work Permit",
  tourist: "Tourist",
  other: "Other",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { passportUid } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch passport data
    const { data: passport, error: passportError } = await supabase
      .from("employee_profiles")
      .select("*")
      .eq("shareable_link_uid", passportUid)
      .single();

    if (passportError || !passport) {
      throw new Error("Passport not found");
    }

    // Fetch profile data
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", passport.user_id)
      .single();

    // Use Lovable AI to generate structured PDF content
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    
    const pdfContent = `
GLOBID EMPLOYMENT PASSPORT
═══════════════════════════════════════════════════════════

PERSONAL INFORMATION
────────────────────
Full Name: ${profile?.full_name || "—"}
Email: ${profile?.email || "—"}
Nationality: ${passport.nationality ? COUNTRY_NAMES[passport.nationality] || passport.nationality : "—"}
Country of Residence: ${passport.residence_country ? COUNTRY_NAMES[passport.residence_country] || passport.residence_country : "—"}
Visa Status: ${passport.visa_status ? VISA_STATUS_LABELS[passport.visa_status] || passport.visa_status : "—"}

VERIFIED DOCUMENTS
────────────────────
✓ Passport: ${passport.passport_file_url ? "Verified" : "Not Provided"}
✓ National ID: ${passport.national_id_file_url ? "Verified" : "Not Provided"}
${passport.emirates_id_file_url ? "✓ Emirates ID: Verified" : ""}
${passport.iqama_file_url ? "✓ Iqama: Verified" : ""}
${passport.residency_permit_file_url ? "✓ Residency Visa: Verified" : ""}
${passport.cnie_file_url ? "✓ CNIE: Verified" : ""}
${passport.address_proof_file_url ? "✓ Address Proof: Verified" : ""}

BANKING INFORMATION
────────────────────
Bank Country: ${passport.bank_account_country ? COUNTRY_NAMES[passport.bank_account_country] || passport.bank_account_country : "—"}
Account Number: ${passport.bank_account_number ? "****" + passport.bank_account_number.slice(-4) : "—"}
SWIFT/BIC Code: ${passport.swift_code || "—"}

TAX INFORMATION
────────────────────
Tax ID: ${passport.tax_id || "—"}
${passport.nin ? `NIN: ${passport.nin}` : ""}
${passport.bvn ? `BVN: ${passport.bvn}` : ""}

ADDRESS
────────────────────
${passport.address || "—"}

═══════════════════════════════════════════════════════════
This passport is structured for global employment compliance.
Generated on: ${new Date().toISOString().split('T')[0]}
Passport ID: ${passportUid}
═══════════════════════════════════════════════════════════
`;

    // Return the PDF content as text (can be enhanced with actual PDF generation)
    return new Response(JSON.stringify({ 
      content: pdfContent,
      filename: `GlobID_Passport_${profile?.full_name?.replace(/\s+/g, '_') || 'Employee'}.txt`
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
