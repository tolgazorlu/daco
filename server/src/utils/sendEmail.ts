const transportation = require("../config/nodemailer")

const verifyEmail = async (email: string, username: string, link: string) => {
    return await transportation.sendMail({
        to: email,
        from: process.env.AUTH_MAIL,
        subject: 'Successfully registered',
        html: `
        <div>
            <h1>Dear ${username},</h1>
            <p>Thank you for registered DACO</p>
            <p>To complate your registration, please click on the link below...</p>
            <a href="${link}">Click Here!</a>
        </div>
        `
    })
}

module.exports = { verifyEmail }