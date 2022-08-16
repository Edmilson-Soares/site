module.exports = {

    register({ strapi }) {
        ///conficuração da views



    },

    async bootstrap({ strapi }) {
        var rabbitmq = require('amqplib/callback_api');

        /* const amqplib = require('amqplib');

         const queue = 'tasks';
         const conn = await amqplib.connect(process.env.RABBITMQ_URL);

         const ch1 = await conn.createChannel();
         await ch1.assertQueue(queue);

         // Listener
         ch1.consume(queue, (msg) => {
             if (msg !== null) {
                 console.log('Recieved:', msg.content.toString());
                 ch1.ack(msg);
             } else {
                 console.log('Consumer cancelled by server');
             }
         });

         // Sender
         const ch2 = await conn.createChannel();

         setInterval(() => {
             ch2.sendToQueue(queue, Buffer.from('something to do'));
         }, 1000);

         */


        //process.env.RABBITMQ_URL
        /*   const amqplib = require('amqplib/callback_api');
           const queue = 'tasks';

           amqplib.connect(process.env.RABBITMQ_URL, (err, conn) => {
               if (err) throw err;

               // Listener
               conn.createChannel((err, ch2) => {
                   if (err) throw err;

                   ch2.assertQueue(queue);

                   ch2.consume(queue, (msg) => {
                       if (msg !== null) {
                           console.log(msg.content.toString());
                           ch2.ack(msg);
                       } else {
                           console.log('Consumer cancelled by server');
                       }
                   });
               });

               // Sender
               conn.createChannel((err, ch1) => {
                   if (err) throw err;

                   ch1.assertQueue(queue);

                   setInterval(() => {
                       ch1.sendToQueue(queue, Buffer.from('something to do'));
                   }, 1000);
               });
           });

           */




    },
};


function gracefulShutdown(code) {
    return event => {
        console.info(`${event} signal received with code ${code}`);
        console.log('Closing http server...');
        server.close(() => {
            console.log('Http server closed.');
            console.log('Closed DB connection...');
            process.exit(0);
        });
    }

}

/*

// generated with < Ctrl > +C in the terminal.
// The 'SIGTERM' signal is a generic signal used to cause program termination
process.on('SIGINT', gracefulShutdown('SIGINT'));

// not supported on Windows
process.on('SIGTERM', gracefulShutdown('SIGTERM'));

process.on('exit', (code) => {
  console.info('exit signal received.', code);
});

// sem ele a aplicação morre
process.on('uncaughtException', (error, origin) => {
  console.info(`\n${origin} signal received.\n${error}`);
});

// sem ele a aplicação joga um warn
process.on('unhandledRejection', (error, origin) => {
  console.info(`\nunhandledRejection signal received.\n${error}`);
});


*/


// node_modules/@strapi/plugin-upload/server/controllers/admin-api/

// node_modules/@strapi/plugin-upload/server/controllers/content-api
