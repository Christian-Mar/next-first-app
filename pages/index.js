import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

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

function HomePage() {
	return (
		<Layout>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</Layout>
	);
}

export default HomePage;
