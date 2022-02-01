
import About from './About';
import DataViz from './DataViz';
import BrandRecog from './BrandRecog';
import EverybodySad from './EverybodySad';

const { aboutText, aboutImage } = About;
const { dataVizText, dataVizImage } = DataViz;
const { brandRecogText, brandRecogImage } = BrandRecog;
const { everybodySadText, everybodySadImage } = EverybodySad;

const ContentSource = {
 	ImageSource: {
 		About: aboutImage,
 		DataViz: dataVizImage,
 		BrandRecog: brandRecogImage,
 		EverybodySad: everybodySadImage
 	},

 	TextSource: {
 		About: aboutText,
 		DataViz: dataVizText,
 		BrandRecog: brandRecogText,
 		EverybodySad: everybodySadText
 	}

 };

 export default ContentSource;