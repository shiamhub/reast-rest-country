import './App.css';
// import { useEffect, useState } from 'react';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      {/* <Header></Header> */}
      <Countries></Countries>
      <Person></Person>
      <Footer></Footer>
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   } , []);

//   return (
//     <div>
//       {
//         countries.map(country => <Country population={country.population} name={country.name.common}></Country>)
//       }
//       <h1>Every countries</h1>
//       <h3>Available Countries: {countries.length}</h3>
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>

//     </div>
//   )
// }

export default App;
