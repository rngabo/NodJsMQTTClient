# NodeJS MQTT Client Application
This is a NodeJS application that connects to multiple MQTT brokers and subscribes to a topic on each of them.

# Installation
Install NodeJS on your system.

Clone or download this repository to your local machine.

Open the terminal and navigate to the directory where you have cloned/downloaded the repository.

Install the necessary libraries by running the following command:

Copy code
npm install mqtt express

# Usage

Make sure you have Mosquitto MQTT Broker with MBC extension already installed on your system.

Navigate to the Mosquitto directory in the terminal and run the following commands to start Mosquitto with different port numbers:

css
Copy code
mosquitto -c mosquitto.conf -p 1886
mosquitto -c mosquitto.conf -p 1887
mosquitto -c mosquitto.conf -p 1889
Navigate to the NodeJS directory in the terminal and run the following command to start the NodeJS application:

Copy code
node app.js
Open a web browser and go to http://localhost:3000 to see the list of brokers and the topics they are subscribed to.

Check the console log for the received messages from each broker.

# License
This project is licensed under the MIT License. See the LICENSE file for more details.
