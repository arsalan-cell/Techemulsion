

export default function (req, res){
  console.log(req.body)

    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'arsalancity11@gmail.com',
          pass: 'nwhm kczk blkm yzim',
          
        },
        secure: true,
    });
    const mailData = {
        from: 'arsalancity11@gmail.com',
        to: 'arsalancity61@gmail.com',
       
        subject: `Message From ${req.body.firstname}`,
        text: req.body.description + " | Sent from: " + req.body.email + "phone no" + req.body.phoneno,
        html: `<div>Description:${req.body.description}</div><p>Sent from:
        ${req.body.email}</p>`,
        attachments: [{
         fileName: req.body.fileName,
         encoding: req.body.encoding,
         content: req.body.file,
         contentType : req.body.fileType

      }]
       
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)


    
}
