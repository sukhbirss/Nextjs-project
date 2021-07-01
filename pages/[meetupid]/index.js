import style from './meetupid.module.css'

export default function MeetupDetails(){

	return (
			<div className={style.details}>
				<img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
				<h1>A first Meetup</h1>
				<address>Street 43 new york,USA</address>
				<p>meetup description</p>
			</div>
		);
}