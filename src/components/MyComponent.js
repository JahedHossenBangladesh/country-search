import React from 'react'
import '../App.css'
import Countries from './Countries';

export default function MyComponent(props) {
const {country} =props;

const api =
  country === "Southeast Asia"
    ? "asean"
    : country === "South Asia"
    ? "saarc"
    : "asean"; ;
 const [error, setError] = React.useState(null);
 const [isLoaded, setIsLoaded] = React.useState(false);
 const [items, setItems] = React.useState([]);


 React.useEffect(() => {
   fetch(`https://restcountries.eu/rest/v2/regionalbloc/${api}`)
     .then((res) => res.json())
     .then(
       (result) => {
         setIsLoaded(true);
         setItems(result);
       },
       
       (error) => {
         setIsLoaded(true);
         setError(error);
       }
     );
 }, [api]);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
            {items.map((item) => (
              <Countries key={item.area} item = {item}></Countries>
              
            ))}
          </>
        );
      }
}
