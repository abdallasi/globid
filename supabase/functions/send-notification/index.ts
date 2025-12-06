import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, email, name, data } = await req.json();

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    // If Resend is not configured, just log and return success
    if (!resendApiKey) {
      console.log(`Email notification (${type}) would be sent to ${email}`);
      return new Response(JSON.stringify({ success: true, message: "Email logging only - RESEND_API_KEY not configured" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const resend = new Resend(resendApiKey);

    let subject = "";
    let html = "";

    switch (type) {
      case "welcome":
        subject = "Welcome to GlobID!";
        html = `
          <h1>Welcome to GlobID, ${name}!</h1>
          <p>Thank you for signing up. You're on your way to creating your global employment passport.</p>
          <p>Complete your profile and payment to unlock your verified employment identity.</p>
          <p>Best regards,<br>The GlobID Team</p>
        `;
        break;
      case "payment_success":
        subject = "Payment Confirmed - Your Passport is Ready!";
        html = `
          <h1>Payment Successful!</h1>
          <p>Hi ${name},</p>
          <p>Your payment has been confirmed. You can now complete your employment passport and share it with employers worldwide.</p>
          <p>Your passport link: ${data?.passportLink || ''}</p>
          <p>Best regards,<br>The GlobID Team</p>
        `;
        break;
      case "passport_complete":
        subject = "Your GlobID Passport is Complete!";
        html = `
          <h1>Congratulations!</h1>
          <p>Hi ${name},</p>
          <p>Your employment passport is now complete and ready to share with employers.</p>
          <p>Share your passport: ${data?.passportLink || ''}</p>
          <p>Best regards,<br>The GlobID Team</p>
        `;
        break;
      default:
        subject = "GlobID Notification";
        html = `<p>Hello ${name},</p><p>${data?.message || 'You have a new notification.'}</p>`;
    }

    const { error } = await resend.emails.send({
      from: "GlobID <onboarding@resend.dev>",
      to: [email],
      subject,
      html,
    });

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
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
