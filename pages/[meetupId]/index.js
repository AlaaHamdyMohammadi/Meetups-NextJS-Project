import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
  // const {selectedMeetup} = props
    return (
      <div>
        <MeetupDetails
          image={props.meetupData.image}
          title={props.meetupData.title}
          address={props.meetupData.address}
          description={props.meetupData.description}
        />
      </div>
    );
}

export async function getStaticPaths(){
  const client = await MongoClient.connect(
    `mongodb+srv://alaahamdy2197:S3UZjXd4wpGjDtm2@cluster0.qmymzal.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context){
    // Fetch data for single meetup
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
      `mongodb+srv://alaahamdy2197:S3UZjXd4wpGjDtm2@cluster0.qmymzal.mongodb.net/meetups?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });

    client.close();
    return {
      props: {
        meetupData: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
        },
      },
    };
}

export default MeetupDetailsPage
