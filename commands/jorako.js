const jorakos = [
    "Die heilige Schinkenwurst, eingetunken in durch Benzin verseuchtes Fett.",
    "Ddakji vs Gong-gi, Talahon 1 gegen 1.",
    "Der MOZART-B0T wurde nach Mozart benannt.",
    "Simon Unge und der Käse mit Salat.",
    "Gestern war van Gogh in der U-Bahn."
];

async function jorakoCommand(sock, chatId) {
    const randomJorakos = jorakos[Math.floor(Math.random() * truths.length)];
    await sock.sendMessage(chatId, { text: `jkdshfgb ${randomJorakos}` });
}

module.exports = { jorakoCommand };
