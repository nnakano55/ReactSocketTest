const DataVizText = (
	<>
		<div className="flex center">
			<h1>Data Visualization Project: "Suicide in Japan: Why?"</h1>
		</div>

		<div className="flex">
			<div className="flexColumn padding">
				
				<p>
					 This is a data visualization project that I made with 
					 two other teammates. The project focuses on the suicide problem 
					 of Japan and visualize the data in a map and a graph in order to 
					 find correlations. The user will use the double slider to 
					 determine the years that the visualization will use for its data.
				</p>

				<p>
					We used D3.js to create the visualizations. We used the D3 library 
					to create a geomap of Japan and a bar graph. The Map of Japan is 
					divided by prefecture(47 in total) and each prefecture is colored 
					in by the average data of the years determined by the double slider.
					 The Graphic is also colored, but more importantly divided up by the 
					 reason why the person committed suicide.
				</p>

			</div>

			<div className="flexcolumn padding">
				
				<p>
					I was the project lead for this project. I was in charge of dividing 
					up the work with my teammates, collecting the data, and making sure 
					that the code they wrote works with other parts of the project.
				</p>

				<p>
					Looking back at the project, there are definitely things I could of 
					done better. Like for example I formatted the page using a giant table.
					 If I were to go back and redesign the page I would definitely do that 
					 and make sure the page works with smaller window sizes. There are other
					  things I would change, but overall I am proud of this project and I am 
					  glad that my teammates and I decided to go with it.<br/>
					  <b>Link: </b>
					  <a href="nnakano55.github.io/finalproject" target="_blank">Suicide in Japan: Why?</a>
				</p>
				
			</div>
		</div>
	</>
);

export default DataVizText;