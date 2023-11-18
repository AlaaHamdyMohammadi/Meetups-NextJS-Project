import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetailsPage() {
    return (
      <div>
        <MeetupDetails  title="first meetup" address="street address 5" description="description of meetup" />
      </div>
    );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {params: {meetupId: 'm1'}},
      {params: {meetupId: 'm2'}},
    ]
  }
}

export async function getStaticProps(context){
    // Fetch data for single meetup
    const meetupId = context.params.meetupId;
    return {
      props: {
        meetupData: {
          id: meetupId,
          title: "First meetup",
          address: "some street 5",
          description: "This is first meetup",
        },
      },
    };
}

export default MeetupDetailsPage
