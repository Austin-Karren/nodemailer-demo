const nodemailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env;

module.exports = {
   email: async(req, res) => {
      // const {customerEmail} = req.body;
      try {
         let transporter = nodemailer.createTransport({
            // host: 'smtp.mail.yahoo.com',
            host: 'smtp.gmail.com',
            // port: 465,
            port: 587,
            // service: 'yahoo',
            service: 'gmail',
            secure: false,
            requireTLS: true, //gmail only
            auth: {
               user: EMAIL,
               pass: PASSWORD
            }
         });
         let info = await transporter.sendMail({
            from: `Kylie England <${EMAIL}>`,
            to: 'austin.t.karren@gmail.com',
            subject: 'Nodemailer example',
            text: 'This is a nodemailer test',
            html: '<div>This is a nodemailer test</div>'
            //attachments: [
               // {fileName: name_of_file, path: file_path}
            //]
         }, (err, res) => {
            if(err) {
               console.log(err)
            } else {
               res.status(200).send(info);
            }
         })
      } catch(err) {
         res.status(500).send(err);
      }
   }
}