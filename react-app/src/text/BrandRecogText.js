
const BrandRecogText = (
	<div className="flexColumn padding center">
		<h1>Mobile App Team Project: "Brand Recognizer"</h1>
		<p>
			Brand Recognizer is a team project I worked on for one of my course works: 
			Mobile Apps. The app's main focus is to take a photo of a brand and bring up 
			information about the particular brand. We utilized the 
			<a href="https://cloud.google.com/vision/" target="_blank">Google Vision AI</a> 
			to figure out brand of the photo that is taken.<br/><br/> 
			My personal contribution to the project is the login system. 
			I used <a href="https://firebase.google.com/" target="_blank">Firebase</a>
			to create the system. There is the regular SignIn/SignUp system, 
			which I did make a very simple system where it just takes a email and password 
			and remembers it. I regret not making a security system to 
			check if the email is valid or check if the email is actually the user, 
			for that would have been a good experience for me to create a system that 
			has a good security system. I also included a login system using the user's 
			Google account, Facebook account, and Twitter account. These were relatively 
			easy because there was already a library to connect these account information 
			to firebase, and each of these services have provided a button 
			for developers to use in their apps.
		</p>
	</div>
);

export default BrandRecogText;