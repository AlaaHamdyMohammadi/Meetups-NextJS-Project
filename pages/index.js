import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image: "",
    title: "A First Meetup",
    address: "Some address 5",
  },
  { id: "m2", image: "", title: "A Second Meetup", address: "Some address 5" },
];

function HomePage() {
  return (
    <div>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default HomePage;
