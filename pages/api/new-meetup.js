// import { MongoClient } from 'mongodb';

// server-side code -> not for the client 
// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        //await MongoClient.connect('...url') -> secure!
        //const db = client.db();

        //const meetupCollection = db.collection('meetups');

        //const result = await meetupsCollection.insertOne(data) --> insertOne inserts a document, which is an object

        //console.log(result); 

        //client.close();

        //res.status(201);json({message: 'Meetup inserted!});
    }
}

export default handler;