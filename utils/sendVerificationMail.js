const {createMailTransporter} = require('./createMailTransporter')

const sendVerificationMail = (user)=>{
 const transporter = createMailTransporter()

 const mailOptions= {
from :"jazeeraak@outlook.com",
to:user.email,
subject:"Verify your email...",
html: `<p>Hello ${user.username}, verify your email by clicking this link...</p>
<a href='http://localhost:5001/api/verify-email?emailToken=${user.emailToken}'>Verify Your Email</a>
`
 }
 transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Verification email sent")
    }
 })

}

module.exports = {sendVerificationMail}