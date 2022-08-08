import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'chris@doubledownent.com', // Your email where you'll receive emails
      from: 'chris@doubledownent.com', // your website email address here
      subject: `[Lead from Double Down Ent Website]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${req.body.contactName}, their email is: ✉️${req.body.contactEmail} </h3>
            <div style="font-size: 16px;">
              <p>Subject:</p>
              <p>${req.body.contactSubject}</p>
              <p>Message:</p>
              <p>${req.body.contactMessage}</p>
            </div>
          </div>
        </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
