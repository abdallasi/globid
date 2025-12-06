import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const NGN_RATE = 1500; 
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, userId, amount, callbackUrl } = await req.json();

    const paystackSecretKey = Deno.env.get("PAYSTACK_SECRET_KEY");
    if (!paystackSecretKey) {
      throw new Error("Paystack secret key not configured");
    }
const paystackSecretKey = Deno.env.get("PAYSTACK_SECRET_KEY");
    // Initialize Paystack transaction
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * NGN_RATE * 100, // Paystack uses kobo (cents)
        currency: "NGN",
        callback_url: callbackUrl,
        metadata: {
          user_id: userId,
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      throw new Error(data.message || "Failed to initialize payment");
    }

    return new Response(JSON.stringify({ url: data.data.authorization_url, reference: data.data.reference }), {
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
