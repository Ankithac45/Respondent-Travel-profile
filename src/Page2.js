import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  const [selectedMode, setSelectedMode] = useState('');

  const handleRadioChange = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div>
      <h2>Select your mode of transportation:</h2>
      <form>
        <div>
          <input type="radio" id="bus1" name="mode" value="bus1" onChange={handleRadioChange} />
          <label htmlFor="bus1">Bus Type 1</label>
        </div>
        <div>
          <input type="radio" id="bus2" name="mode" value="bus2" onChange={handleRadioChange} />
          <label htmlFor="bus2">Bus Type 2</label>
        </div>
        <div>
          <input type="radio" id="walk-bicycle" name="mode" value="walk-bicycle" onChange={handleRadioChange} />
          <label htmlFor="walk-bicycle">Walk / Bicycle</label>
        </div>
        <div>
          <input type="radio" id="metro" name="mode" value="metro" onChange={handleRadioChange} />
          <label htmlFor="metro">Metro</label>
        </div>
        <div>
          <input type="radio" id="own-car" name="mode" value="own-car" onChange={handleRadioChange} />
          <label htmlFor="own-car">Own Car</label>
        </div>
        <div>
          <input type="radio" id="own-two-wheeler" name="mode" value="own-two-wheeler" onChange={handleRadioChange} />
          <label htmlFor="own-two-wheeler">Own Two-wheeler</label>
        </div>
        <div>
          <input type="radio" id="ride-hailing-car" name="mode" value="ride-hailing-car" onChange={handleRadioChange} />
          <label htmlFor="ride-hailing-car">Ride-hailing Car</label>
        </div>
      </form>
      <p>You selected: {selectedMode}</p>
        {/* Link to page 2 */}
        <Link to="/"><b><h2>Go to Page 1</h2></b></Link>
    </div>
  );
}

export default Page2;
