import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Stripe Setup ===');
console.log('This script will help you set up your Stripe keys.');
console.log('You can find your keys in the Stripe Dashboard under Developers → API keys');
console.log('');

rl.question('Enter your Stripe publishable key (starts with pk_test_): ', (publishableKey) => {
  rl.question('Enter your Stripe secret key (starts with sk_test_): ', (secretKey) => {
    // Update the frontend file
    let frontendContent = fs.readFileSync('./src/pages/Prices/index.jsx', 'utf8');
    frontendContent = frontendContent.replace(
      /const stripePromise = loadStripe\('.*?'\);/,
      `const stripePromise = loadStripe('${publishableKey}');`
    );
    fs.writeFileSync('./src/pages/Prices/index.jsx', frontendContent);
    
    // Update the backend file
    let backendContent = fs.readFileSync('./server.js', 'utf8');
    backendContent = backendContent.replace(
      /const stripe = new Stripe\('.*?'\);/,
      `const stripe = new Stripe('${secretKey}');`
    );
    fs.writeFileSync('./server.js', backendContent);
    
    console.log('');
    console.log('✅ Stripe keys have been updated!');
    console.log('');
    console.log('To start the server, run:');
    console.log('  node server.js');
    console.log('');
    console.log('To start the frontend, run:');
    console.log('  npm run dev');
    
    rl.close();
  });
}); 