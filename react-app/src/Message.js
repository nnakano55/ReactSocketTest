
function Message(props) {
	if(props.text)
		return <h1>{props.text}</h1>;
	return <h1>No message input!</h1>;
}

export default Message;