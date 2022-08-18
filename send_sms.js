require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authtoken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authtoken)

client.messages
    .create({
        from: 'whatsapp:+14752671601',
        body: 'I love you Barbara. This was created using code. lol',
        to: 'whatsapp:+2348136165990'
    })
    .then(message => console.log(message.sid))

// exports.default = sender