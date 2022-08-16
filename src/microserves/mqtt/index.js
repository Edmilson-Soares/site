const mqtt = require('mqtt')
const client = mqtt.connect(process.env.MQTT_URL)
const eventos = require("./../../events/nodejs")

let topic = "dd"

console.log(process.env.MQTT_URL)





module.exports = client;