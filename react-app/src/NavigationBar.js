
import MainContents from './MainContents';
import './NavigationBar.css';

function NavigationBar() {

	let clickEvent = (e) => {
		if(e.target.id != "") {
			document.getElementById(e.target.id.toUpperCase()).scrollIntoView();
		}
	};

	return (
		<div id="navBar">
			<a id="About" onClick={clickEvent} className="navBarContent">About</a>
			<a id="DataViz" onClick={clickEvent}  className="navBarContent">Data Visualization</a>
			<a id="BrandRecog" onClick={clickEvent}  className="navBarContent">Brand Recognizer</a>
			<a id="EverybodySad" onClick={clickEvent}  className="navBarContent">Everybody's Sad</a>
			<a id="Top" onClick={clickEvent}  className="navBarContent">Top</a>
		</div>
	);
}

export default NavigationBar;