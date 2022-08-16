const events = require('events');
const event = new events.EventEmitter();

/*
const mqtt = require("./../../microserves/mqtt")

const rabbitmq = require('./../../microserves/rabbitmq/index')

const email_send = require('./../../api/email/services')

const nodemailer = require('nodemailer'); // Requires nodemailer to be installed (npm install nodemailer)


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'stpmicroaitec@gmail.com',
        pass: 'felicid@de123456'
    }
});










var q = 'task';
rabbitmq.then(function(conn) {
    return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(q).then(function(ok) {
        return ch.consume(q, function(msg) {
            if (msg !== null) {
                console.log(msg.content.toString());
                event.emit("rabbitmq_consume", { topic: q, message: msg })
                ch.ack(msg);
            }
        });
    });
}).catch(console.warn);

//Create an event handler:
const myEventHandler = ({ strapi }) => {
    console.log('I hear a scream!22');
}

mqtt.on('message', (topic, message) => {
    event.emit('mqtt_message', { topic, message });
})


const rabbitmq_consume = ({ topic, message }) => {
    message = message.content.toString()
    console.log(message, topic, 'rabbitmq')
}


const rabbitmq_pub = ({ topic, message }) => {

    //  console.log("dddddddddd---->")

    rabbitmq.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(topic).then(function(ok) {
            return ch.sendToQueue(topic, Buffer.from(message));
        });
    }).catch(console.warn);

}

const mqtt_message = ({ topic, message }) => {
    message = message.toString()
    console.log(message, topic, 'mqtt1')
}

const mqtt_pub = (topic, massege) => {
    mqtt.publish(topic, massege)
    console.log('I hear a scream!22', massege);
}

const mqtt_subscribe = (topic) => {
    mqtt.subscribe(topic)
    console.log('subscribe', topic);
}

var email_password = async({ strapi, user, settings, url }) => {
    try {

        const mailOptions = {
            to: user.email,
            from: '"MicroAITec" <microaitec@microaitec.com>',
            replyTo: settings.response_email,
            subject: settings.object,
            text: settings.message,
            // replyTo: nodeMailerUser,
            html: `Click on link ${url}`
        };

        transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error, "fffffe")
    }
}

var email_creat_acount = async({ strapi, email }) => {
    try {


        const mailOptions = {
            from: 'microaitec@microaitec.com',
            to: email,
            subject: `Criação de Conta`,
            // replyTo: nodeMailerUser,
            html: "Bem-Vindo!"
        };

        transporter.sendMail(mailOptions)

    } catch (error) {
        console.log(error, "fffffe")
    }
}


//Assign the event handler to an event:  mqtt_massege

event.on('mqtt_message', mqtt_message);
event.on('rabbitmq_consume', rabbitmq_consume);
event.on('rabbitmq_pub', rabbitmq_pub);
event.on('mqtt_pub', mqtt_pub);
event.on('mqtt_subscribe', mqtt_subscribe);


event.on('scream', myEventHandler);

event.on('creat_user', email_creat_acount);

event.on('password_user', email_password);

//Fire the 'scream' event:
//eventEmitter.emit('scream');


*/
module.exports = event;
