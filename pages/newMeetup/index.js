import NewMeetupForm from "@/components/meetups/NewMeetupForm"

function NewMeetupPage() {
    function onAddMeetup(meetupData){
        console.log(meetupData)
    }
    return (
      <div>
        <NewMeetupForm onAddMeetup={onAddMeetup} />
      </div>
    );
}

export default NewMeetupPage
