const CronJob = require('cron').CronJob
const sender = require('./send_sms')


require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authtoken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authtoken)

function sendMessage() {
    client.messages
        .create({
            from: '+14752671601',
            body: 'I love you Barbara. This was created using code. lol',
            to: '+2348136165990'
        })
        .then(message => console.log(message.sid))
}    

const cron = new CronJob('* * * * *', () => {
    sendMessage();
})

cron.start()