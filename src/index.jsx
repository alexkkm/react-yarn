// Basic tools
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'


// Addictional decoration 
import './index.css';



// Index Page component
class Index extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Add some new content and decorate this page</p>
      </div>
    );
  }
}

// App() function are the main function of the webpage
export default function App() {
  return (
    // React Router
    <div>
      <Routes>
        <Route path="/" element={<Index />} />

      </Routes>


    </div>
  );
}

// the most outter layer Dom render, render the App() function to index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);