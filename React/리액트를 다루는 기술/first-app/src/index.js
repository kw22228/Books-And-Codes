import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppClass from './AppClass';
import Say from './components/Say/Say';
import EventPracticeClass from './components/EventPractice/EventPracticeClass';
import EventPractice from './components/EventPractice/EventPractice';
import EventPracticeForm from './components/EventPractice/EventPracticeForm';
import ValidationSampleClass from './components/Validation/ValidationSampleClass';
import RefSample from './components/ref/RefSample';
import ScrollBoxClass from './components/ref/ScrollBoxClass';
import IterationSample from './components/key/IterationSample';
import LifeCycleSample from './components/LifeCycle/LifeCycleSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <AppClass />
    {/* <Say /> */}
    {/* <EventPracticeClass /> */}
    {/* <EventPracticeForm /> */}
    {/* <ValidationSampleClass /> */}
    {/* <RefSample /> */}
    {/* <ScrollBoxClass /> */}
    {/* <IterationSample /> */}
    {/* <LifeCycleSample /> */}
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
