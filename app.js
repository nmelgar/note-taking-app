const { MongoClient } = require("mongodb")
const uri = require("./atlas_uri")

console.log(uri)

const cliente = new MongoClient(uri)
const dbname = "bank"

const connectToDatabase = async () => {
    try {
        await cliente.connect();
        console.log(`Connected to the ${dbname} database`);
    }
    catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

const main = async () => {
    try {
        await connectToDatabase();
    }
    catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
};
main();