import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
  const { travelMeans, handleTravelMeansChange, travelDistance, handleTravelDistanceChange } = props;

  return (
    <div>
      <h1>Respondent Travel Profile</h1>
      <h2>Question 1: What is your most frequently used means of travel from your home to work location?</h2>
      <form>
        <label>
          <input
            type="radio"
            value="Bus"
            checked={travelMeans === 'Bus'}
            onChange={handleTravelMeansChange}
          />
          Bus
        </label>
        <label>
          <input
            type="radio"
            value="Metro"
            checked={travelMeans === 'Metro'}
            onChange={handleTravelMeansChange}
          />
          Metro
        </label>
        <label>
          <input
            type="radio"
            value="Own Two-wheeler"
            checked={travelMeans === 'Own Two-wheeler'}
            onChange={handleTravelMeansChange}
          />
          Own Two-wheeler
        </label>
        <label>
          <input
            type="radio"
            value="Own Car"
            checked={travelMeans === 'Own Car'}
            onChange={handleTravelMeansChange}
          />
          Own Car
        </label>
        <label>
          <input
            type="radio"
            value="Walk / Bicycle"
            checked={travelMeans === 'Walk / Bicycle'}
            onChange={handleTravelMeansChange}
          />
          Walk / Bicycle
        </label>
        <label>
          <input
            type="radio"
            value="Auto"
            checked={travelMeans === 'Auto'}
            onChange={handleTravelMeansChange}
          />
          Auto
        </label>
        <label>
          <input
            type="radio"
            value="App based ride hailing cab services including Ola / Uber"
            checked={travelMeans === 'App based ride hailing cab services including Ola / Uber'}
            onChange={handleTravelMeansChange}
          />
          App based ride hailing cab services including Ola / Uber
        </label>
      </form>
      <h2>Question 2: What is the total distance between your home and workplace?</h2>
      <form>
        <label>
          <input
            type="radio"
            value="< 5 km"
            checked={travelDistance === '< 5 km'}
            onChange={handleTravelDistanceChange}
          />
          Less than 5 km
        </label>
        <label>
          <input
            type="radio"
            value="5 - 10 km"
            checked={travelDistance === '5 - 10 km'}
            onChange={handleTravelDistanceChange}
          />
          5 - 10 km
        </label>
        <label>
          <input
            type="radio"
            value="10 - 15 km"
            checked={travelDistance === '10 - 15 km'}
            onChange={handleTravelDistanceChange}
          />
          10 - 15 km
        </label>
        <label>
          <input
            type="radio"
            value="15 - 20 km"
            checked={travelDistance === '15 - 20 km'}
            onChange={handleTravelDistanceChange}
          />
          15 - 20 km
        </label>
        <label>
          <input
            type="radio"
            value="20 - 25 km"
            checked={travelDistance === '20 -25 km'}
            onChange={handleTravelDistanceChange}
        />
        20 - 25 km
        </label>
        <label>
          <input
            type="radio"
            value="> 25 km"
            checked={travelDistance === '> 25 km'}
            onChange={handleTravelDistanceChange}
        />
        More than 25 km
        </label>
        </form>
        {/* Link to page 2 */}
      <Link to="/page2"><b><h2>Go to Page 2</h2></b></Link>
    </div>
);
}

export default HomePage;