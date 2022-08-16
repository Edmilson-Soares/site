var q = 'task';

const rabbitmq = require('amqplib/callback_api')

rabbitmq.connect(process.env.MABBITMQ_URL, (err, conn) => {


    console.log(err, conn)
});



module.exports = rabbitmq;