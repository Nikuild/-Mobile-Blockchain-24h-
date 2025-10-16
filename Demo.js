// 🎮 Demo runner for Mobile Blockchain
console.log("📱 MOBILE BLOCKCHAIN DEMO");
console.log("=========================\n");

const Blockchain = require('./mobile-blockchain');

// Quick demo
const bc = new Blockchain();

// Add some transactions
for (let i = 0; i < 5; i++) {
    const tx = bc.createTransaction(
        `demo_user_${i}`,
        `demo_receiver_${i}`,
        100 + i,
        `Demo transaction ${i}`
    );
    bc.addTransaction(tx);
}

// Mine a block
bc.mineBlock();

// Show results
const stats = bc.getStats();
console.log("\n🎉 DEMO COMPLETE!");
console.log("📊 Results:", stats);
console.log("✅ Chain valid:", bc.isValidChain());
console.log("\n🚀 Try: npm start (for full mobile blockchain experience)");
