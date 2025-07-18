import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const resend = new Resend(process.env.NUXT_RESEND_API_KEY)
  const resendEmail = process.env.NUXT_TO_EMAIL ? process.env.NUXT_TO_EMAIL : 'info@suikerspin.studio'

  try {
    const body = await readBody(event);
    let html = `<html>
    <body>
    <p>Beste ClickTok,<br><br>
    Er is een nieuw formulier ingevuld op de website:<br><br>
    <ul>`;
    
    Object.keys(body).forEach(key => {
      if (body[key]) {
        html += `<li><strong>${key}:</strong> ${body[key]}</li>`;
      }
    })

    html += `</ul><br><br>
      Groetjes!
    </body></html>`;

    const data = await resend.emails.send({
      from: 'ClickTok <clicktok@suikerspin.studio>',
      to: [resendEmail],
      subject: "Contactformulier ingevuld!",
      html: html
    })

    return data
  } catch (error) {
    return { error }
  }
})