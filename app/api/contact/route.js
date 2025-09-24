import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // remitente de prueba gratuito
      to: process.env.EMAIL_TO, // tu correo real donde recibirás los mensajes
      subject: "Nuevo mensaje del portfolio",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      replyTo: email, // el correo de quien envía el formulario
    });

    return new Response(
      JSON.stringify({ success: true, message: "Mensaje enviado ✅" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar ❌" }),
      { status: 500 }
    );
  }
}
