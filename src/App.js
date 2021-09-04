import logo from './logo.svg';
import React from "react";
import './index.css';
import MyComponent from './components/MyComponent';

function App() {
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => setChecked((value) => !value);
    let country = checked ? "South Asia" : "Southeast Asia";
  return (
    <div className="App">
      <p>
        {" "}
        countries in Asia > Southeast Asia / South Asia (Click the button to
        switch the country list){" "}
      </p>
      <button
        onClick={toggleChecked}
        class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full m-5"
      >
        {country}
      </button>
      <MyComponent country={country} />
    </div>
  );
}

export default App;


