import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A first meetup',
		image:
			'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
		address: 'Some address 5, Bakery City',
		description: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'A second meetup',
		image:
			'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		address: 'Some other address 15, Flower Island',
		description: 'This is a second meetup!',
	},
];

function HomePage(props) {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // send a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);
	return (
	
		<MeetupList meetups={loadedMeetups} />
	
	);
}

export async function getStaticProps() {
 // fetch data from an API
 return {
     props: {
         meetups: DUMMY_MEETUPS
     },
     revalidate: 2000 // updates every 2000 seconds
 } 
}

// called before the component function -> async
// code will never be executed on the client side
export default HomePage;
