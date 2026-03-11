import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, userId } = await req.json();

    const paystackPublicKey = Deno.env.get("PAYSTACK_PUBLIC_KEY");
    
    if (!paystackPublicKey) {
      throw new Error("Paystack public key not configured");
    }

    // Generate a unique reference
    const reference = `globid_${userId.substring(0, 8)}_${Date.now()}`;

    console.log("Creating Paystack checkout:", { email, reference });

    // Return data for inline popup (no redirect URL needed)
    return new Response(
      JSON.stringify({ 
        publicKey: paystackPublicKey,
        reference,
        email,
        amount: 14850000, // 148,500 NGN in kobo
        currency: "NGN",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
