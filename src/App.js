// import React, { useState } from 'react';
// import HomePage from './HomePage';
// import Page2 from './Page2';
// import './App.css';


// function App() {
//   const [travelMeans, setTravelMeans] = useState('');
//   const [travelDistance, setTravelDistance] = useState('');

//   const handleTravelMeansChange = (event) => {
//     setTravelMeans(event.target.value);
//   };

//   const handleTravelDistanceChange = (event) => {
//     setTravelDistance(event.target.value);
//   };

//   return (
//     <div>
//       <HomePage
//         travelMeans={travelMeans}
//         handleTravelMeansChange={handleTravelMeansChange}
//         travelDistance={travelDistance}
//         handleTravelDistanceChange={handleTravelDistanceChange}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Page2 from './Page2';
import './App.css';

function App() {
  const [travelMeans, setTravelMeans] = useState('');
  const [travelDistance, setTravelDistance] = useState('');

  const handleTravelMeansChange = (event) => {
    setTravelMeans(event.target.value);
  };

  const handleTravelDistanceChange = (event) => {
    setTravelDistance(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage
              travelMeans={travelMeans}
              handleTravelMeansChange={handleTravelMeansChange}
              travelDistance={travelDistance}
              handleTravelDistanceChange={handleTravelDistanceChange}
            />
          </Route>
          <Route path="/page2">
            <Page2
              travelMeans={travelMeans}
              travelDistance={travelDistance}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
