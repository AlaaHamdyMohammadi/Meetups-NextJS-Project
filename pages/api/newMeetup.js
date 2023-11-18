import {MongoClient} from 'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const {title, image, address, description} = req.body;
        if(!title || !image || !address || !description){
            res.status(422).json({message: 'Invalid Data Input'});
            return;
        }
        const newMeetup = { title, image, address, description };

        const client = await MongoClient.connect(
          `mongodb+srv://alaahamdy2197:S3UZjXd4wpGjDtm2@cluster0.qmymzal.mongodb.net/meetups?retryWrites=true&w=majority`
        );
        
        const db = client.db();
        const meetupsCollection = await db.collection('meetups').insertOne(newMeetup);
        client.close();
        res.status(201).json({message: 'Data Successfully added.', data: meetupsCollection});
    }
}

export default handler;