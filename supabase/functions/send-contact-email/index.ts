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
      from: "Tarzo Website <onboarding@resend.dev>",
      to: ["joana_feijoa@hotmail.com"],
      subject: `Novo Pedido de Orçamento - ${name}`,
      html: `
        <h1>Novo Pedido de Orçamento</h1>
        <p>Recebeu um novo pedido de orçamento através do website:</p>
        
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Empresa:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company || "Não especificada"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">NIF:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${nif}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefone:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone || "Não especificado"}</td>
          </tr>
        </table>
        
        <h2 style="margin-top: 20px;">Mensagem:</h2>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
        
        <hr style="margin-top: 30px;">
        <p style="color: #666; font-size: 12px;">Este email foi enviado automaticamente através do formulário de contacto do website Tarzo.</p>
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
