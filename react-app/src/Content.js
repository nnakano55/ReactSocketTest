
import './Content.css';

import Datatypes from './DataTypes';
import ContentSource from './ContentSource';

const { SourceTypes, Structures } = Datatypes;
const { ImageSource, TextSource } = ContentSource;

// ouputs Image Content
function ImageBox(props) {
	return (
		<>
			{ImageSource[props.name]}
		</>
	);
}

// outputs Text content
function TextBox(props) {
	return (
		<>
			{TextSource[props.name]}
		</>
	);
}

// determines the type of content
function Box(props){
	switch(props.type){
		case SourceTypes.IMAGE: return (
			<ImageBox name={props.name} />
		);

		case SourceTypes.TEXT: console.log('text called'); return(
			<TextBox name={props.name} />
		);
	}// End switch statement
}

// determines the structure of the content
function Content(props) {
	
	switch(props.structure){
		
		case Structures.ONE_TEXT_ONE_IMAGE: return (
			<div id={props.name.toUpperCase()} className="radius flex padding margin darkshade center">
				<Box type={SourceTypes.TEXT} name={props.name} />
				<Box type={SourceTypes.IMAGE} name={props.name} />
			</div>
		); 

		case Structures.ONE_IMAGE_ONE_TEXT: return (
			<div id={props.name.toUpperCase()} className="radius flexColumn padding margin darkshade center">
				<Box type={SourceTypes.IMAGE} name={props.name} />
				<Box type={SourceTypes.TEXT} name={props.name} />
			</div>	
		);

		case Structures.ONE_IMAGE_ONE_TEXT_FLEX: return(
			<div id={props.name.toUpperCase()} className="radius flex padding margin darkshade center">
				<Box type={SourceTypes.IMAGE} name={props.name} />
				<Box type={SourceTypes.TEXT} name={props.name} />
			</div>	
		);

		case Structures.TWO_IMAGE_TWO_TEXT: return (
			<div id={props.name.toUpperCase()} className="radius flexColumn padding margin darkshade center">
				<div className="flex padding center">
					<Box type={SourceTypes.IMAGE} name={props.name} />
				</div>
				<div className="flexColumn padding center">
					<Box type={SourceTypes.TEXT} name={props.name} />
				</div>
			</div>
		);

	}// End of swich statement

}// End Content

export default Content;