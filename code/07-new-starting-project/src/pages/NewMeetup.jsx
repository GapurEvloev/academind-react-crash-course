import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-6e4ad-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section className={""}>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
