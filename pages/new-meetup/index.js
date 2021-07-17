//our-domain.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
    /*    const response = await fetch('api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        */    
   
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm anAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;