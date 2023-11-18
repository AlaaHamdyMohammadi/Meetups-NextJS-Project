import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  const {meetups} = props
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export async function getStaticProps(){
   const client = await MongoClient.connect(
     `mongodb+srv://alaahamdy2197:S3UZjXd4wpGjDtm2@cluster0.qmymzal.mongodb.net/meetups?retryWrites=true&w=majority`
   );

   const db = client.db();
   const meetupsCollection = db.collection("meetups");

   const meetups = await meetupsCollection.find().toArray();

   client.close();

   return {
     props: {
       meetups: meetups.map((meetup) => ({
         title: meetup.title,
         address: meetup.address,
         image: meetup.image,
         id: meetup._id.toString(),
       })),
     },
     revalidate: 1,
   };
  
}

export default HomePage;
