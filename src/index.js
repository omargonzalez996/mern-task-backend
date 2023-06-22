import app from './app.js'
import { connectDB } from './db.js';

async function main() {
    try {
        await connectDB();
        app.listen(5000);
        console.log(`Listening on port http://localhost:5000`);
        //console.log(`Environment: ${process.env.NODE_ENV}`);
    } catch (error) {
        console.error(error);
    }
}
main();
// connectDB();
// app.listen(4000);
// console.log('Server on port ', 4000);