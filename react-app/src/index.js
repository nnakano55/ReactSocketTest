import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './Content';
import DataTypes from './DataTypes';
import reportWebVitals from './reportWebVitals';

const {Structures} = DataTypes;

ReactDOM.render(
     (
          <>
               <Content name="About" structure={Structures.ONE_TEXT_ONE_IMAGE} />
               <Content name="DataViz" structure={Structures.ONE_IMAGE_ONE_TEXT} />
               <Content name="BrandRecog" structure={Structures.ONE_IMAGE_ONE_TEXT_FLEX} />
               <Content name="EverybodySad" structure={Structures.TWO_IMAGE_TWO_TEXT} />
          </>
     ),
     document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
