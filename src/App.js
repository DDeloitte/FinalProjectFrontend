//Final Project
import React from "react";
import MyNavbar from "./components/Webapi/UI/MyNavbar";
import UserDashboard from "./components/Webapi/UI/UserDashboard";
import ItemDashboard from "./components/Webapi/UI/ItemDashboard";
import { Route } from "react-router-dom";

const App = () => {

  return (

    <div>
    <MyNavbar />
    <main>
      <Route path={"/Users"}>
        <UserDashboard/>
      </Route>
      <Route path={"/Items"}>
        <ItemDashboard/>
      </Route>
    </main>
</div>

  );

};

export default App;




//Webapi personal project
// import React, { useEffect, useState } from "react";
// import Dashboard from "./components/Webapi/UI/Dashboard";
// import Navbar from "./components/Webapi/UI/Navbar";
// import DashboardNav from "./components/NavBar/UI/Dashboard";
// import { Route } from "react-router-dom";

// const App = () => {

//   return (
//       <div>

//           <DashboardNav/>

//       </div>
//   );
// }


// export default App;

// import Dashboard from "./components/SecondProject/Dashboard";

// const App = () => {

//   return (

//     <Dashboard/>
//   );
// };

// export default App;

//WebApi Udemy project
// import React, { useState } from 'react';

// import MoviesList from './components/WebApiUdemy/MoviesList';
// import './App.css';

// function App() {

//   const [movies, setMovies] = useState([]);

//   const fetchMoviesHandler = () => {
//     fetch('https://swapi.dev/api/films/').then(response => {
//       return response.json();
//     }).then(data => {
//       const transformedMovies = data.results.map(movieData => {
//         return{
//           id: movieData.episode_id,
//           title: movieData.title,
//           openingText: movieData.opening_crawl,
//           releaseDate: movieData.release_date
//         };
//       });
//       setMovies(transformedMovies);
//     });
//   };

//   return (
//     <React.Fragment>
//       <section>
//         <button
//         onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>
//         <MoviesList movies={movies} />
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;
