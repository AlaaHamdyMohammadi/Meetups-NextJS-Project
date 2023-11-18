import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router = useRouter();
    async function onAddMeetup(meetupData){
        const res = await fetch(`/api/newMeetup`, {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json();
        console.log(data)
        router.push('/')
    }
    return (
      <div>
        <NewMeetupForm onAddMeetup={onAddMeetup} />
      </div>
    );
}

export default NewMeetupPage
