// Define the exchange rate
const exchangeRate = 80;

// Define the original prices in USD
const pricesInUSD = {
"item1": 10,
"item2": 25,
"item3": 15,
"item4": 30
};

// Use the map function to create a new object with prices in INR
const pricesInINR = Object.fromEntries(
  Object.entries(pricesInUSD).map(([item, price]) => [item, price * exchangeRate])
);

// Print the new object with prices in INR
console.log(pricesInINR);
