const wa = require('@open-wa/wa-automate');

let clientInstance;

async function initializeClient() {
  if (!clientInstance) {
    clientInstance = await wa.create({
      sessionDataPath: './session.json', // Path to store your session data
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    console.log('Client is ready!');
  }
  return clientInstance;
}

async function sendWhatsAppMessage(message) {
  try {
    const client = await initializeClient();

    const numbers = ['919429434201@c.us'];

    await Promise.all(
      numbers.map(async (number) => {
        try {
          const response = await client.sendText(number, message);
          console.log(`Message sent successfully to ${number}:`, response);
        } catch (err) {
          console.error(`Error sending message to ${number}:`, err);
        }
      })
    );

    console.log('All messages processed.');
  } catch (err) {
    console.error('Error sending message:', err);
  }
}

// Optional: Function to gracefully close the client when the server shuts down
async function closeClient() {
  if (clientInstance) {
    await clientInstance.close();
    clientInstance = null;
    console.log('Client closed.');
  }
}

module.exports = {
  sendWhatsAppMessage,
  closeClient, // Exporting for graceful shutdown if needed
};
