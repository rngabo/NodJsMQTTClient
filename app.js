const express = require('express');
const mqtt = require('mqtt');
const app = express();
const port = 3000;

// Define broker configurations
const brokers = [
  { url: 'mqtt://localhost:1889', topic: 'test' },
  { url: 'mqtt://localhost:1886', topic: 'test' },
  { url: 'mqtt://localhost:1887', topic: 'test' },
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route to render the index page
app.get('/', (req, res) => {
  res.render('index', { brokers });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Connect to brokers and subscribe to topics
brokers.forEach((broker) => {
  const client = mqtt.connect(broker.url);

  client.on('connect', () => {
    console.log(`Connected to ${broker.url}`);
    client.subscribe(broker.topic, (err) => {
      if (err) {
        console.error(`Error subscribing to ${broker.url}: ${err}`);
      } else {
        console.log(`Subscribed to ${broker.url} topic: ${broker.topic}`);
      }
    });
  });

  client.on('message', (topic, message) => {
    console.log(`Received message on ${broker.url} topic ${topic}: ${message}`);
  });

  client.on('error', (err) => {
    console.error(`Error connecting to ${broker.url}: ${err}`);
  });
});
