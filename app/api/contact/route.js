import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `PORTFOLIO`,
      text: `Nombre: ${name}
            Email: ${email}
            Mensaje: ${message}`,
      replyTo: email
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
