
import Content from './Content';
import DataTypes from './DataTypes';

const {Structures} = DataTypes;

function MainContents() {

	return (
		
		<div style={{
			display:"flex",
			justifyContent: "center",
			backgroundColor: "#233237",
		}}>
			<div style={{
				display: "flex",
				flexDirection: "column"

			}}>
				<Content name="About" structure={Structures.ONE_TEXT_ONE_IMAGE} />
	           	<Content name="DataViz" structure={Structures.ONE_IMAGE_ONE_TEXT} />
	           	<Content name="BrandRecog" structure={Structures.ONE_IMAGE_ONE_TEXT_FLEX} />
	           	<Content name="EverybodySad" structure={Structures.TWO_IMAGE_TWO_TEXT} />
           	</div>
		</div>
	);
}


export default MainContents;