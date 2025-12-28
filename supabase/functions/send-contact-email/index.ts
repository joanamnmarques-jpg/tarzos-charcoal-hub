import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  company: string;
  nif: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, nif, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email with data:", { name, company, nif, email, phone });

    const emailResponse = await resend.emails.send({
      from: "Tarzo <contacto@tarzo.pt>",
      to: ["tarzogeral@hotmail.com"],
      subject: `Novo Pedido de Orçamento - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #1a1a1a;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">TARZO</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Novo Pedido de Orçamento</p>
            </div>
            
            <!-- Content -->
            <div style="background-color: #262626; padding: 30px; border-radius: 0 0 12px 12px;">
              <p style="color: #a3a3a3; font-size: 14px; margin: 0 0 25px 0;">Recebeu um novo pedido de orçamento através do website:</p>
              
              <!-- Contact Details Table -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 12px 15px; background-color: #333333; border-bottom: 1px solid #404040; color: #f97316; font-weight: bold; width: 120px; font-size: 14px;">Nome</td>
                  <td style="padding: 12px 15px; background-color: #333333; border-bottom: 1px solid #404040; color: #ffffff; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #2d2d2d; border-bottom: 1px solid #404040; color: #f97316; font-weight: bold; font-size: 14px;">Empresa</td>
                  <td style="padding: 12px 15px; background-color: #2d2d2d; border-bottom: 1px solid #404040; color: #ffffff; font-size: 14px;">${company || "Não especificada"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #333333; border-bottom: 1px solid #404040; color: #f97316; font-weight: bold; font-size: 14px;">NIF</td>
                  <td style="padding: 12px 15px; background-color: #333333; border-bottom: 1px solid #404040; color: #ffffff; font-size: 14px;">${nif}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #2d2d2d; border-bottom: 1px solid #404040; color: #f97316; font-weight: bold; font-size: 14px;">Email</td>
                  <td style="padding: 12px 15px; background-color: #2d2d2d; border-bottom: 1px solid #404040; color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 15px; background-color: #333333; color: #f97316; font-weight: bold; font-size: 14px;">Telefone</td>
                  <td style="padding: 12px 15px; background-color: #333333; color: #ffffff; font-size: 14px;">${phone ? `<a href="tel:${phone}" style="color: #60a5fa; text-decoration: none;">${phone}</a>` : "Não especificado"}</td>
                </tr>
              </table>
              
              <!-- Message Section -->
              <div style="margin-top: 20px;">
                <h2 style="color: #f97316; font-size: 16px; margin: 0 0 12px 0; font-weight: bold;">Mensagem:</h2>
                <div style="background-color: #333333; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
                  <p style="color: #e5e5e5; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #404040; text-align: center;">
                <p style="color: #737373; font-size: 12px; margin: 0;">Este email foi enviado automaticamente através do formulário de contacto do website TARZO.</p>
                <p style="color: #525252; font-size: 11px; margin: 10px 0 0 0;">© ${new Date().getFullYear()} TARZO - Comércio e Distribuição</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
