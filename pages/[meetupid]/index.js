import style from './meetupid.module.css'
const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'https://images.unsplash.com/photo-1509563079913-60f4d004e74e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    isFeatured: true,
  },
];
const DUMMY_EVENTS2 = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    isFeatured: true,
  }

];
export default function MeetupDetails(props){
	console.log(props)
	return (
			<div className={style.details}>
				<img src={props.data.image} />
				<h1>{props.data.title}</h1>
				<address>{props.data.location}</address>
				<p>{props.data.description}</p>
			</div>
		);
}
export async function getStaticPaths(){
	  const paths = DUMMY_EVENTS2.map((el) => ({
	    params: { meetupid: el.id.toString() },
	  }))
	  console.log(paths)
    return {
        paths, //indicates that no page needs be created at build time
        fallback: true //indicates the type of fallback
    }
}
export async function getStaticProps(context){
	const id = context.params.meetupid

	const data = DUMMY_EVENTS.filter(function (e) {
				    return e.id == id;
				});


	 return {
	    props:{
	     data:data[0]
	 	}
	  }
}