import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  return (
    <div style={{ border: '4px dashed rgb(255,75,92)' }}>
      <h1>Welcome to Indian Tourism</h1>
      <br />
      <h2>Popular Destinations</h2>
      <div style={{ border: '4px dashed rgb(255,75,92)' }}>
        <h3>Kerala</h3>
        <h4>First one</h4>
        <h5>About first one</h5>
        <h6>Second one</h6>
      </div>
      <div style={{ border: '4px dashed rgb(255,75,92)' }}>
        <h3>Maldives</h3>
        <h4>First one</h4>
        <h5>About first one</h5>
        <h6>Second one</h6>
      </div>
      <div style={{ border: '4px dashed rgb(255,75,92)' }}>
        <h3>Paris</h3>
        <h4>First one</h4>
        <h5>About first one</h5>
        <h6>Second one</h6>
      </div>
      <br />
      <br />
      <h2>Indian Climate</h2>
      <div
        id="summer"
        style={{
          border: '4px solid yellow',
          margin: '8px',
        }}
      >
        <h3>Summer</h3>
        <p>
          The summer season usually runs between March and June in India, where
          the days are considered to be the longer and nights
        </p>
      </div>
      <br />
      <div
        id="rainy"
        style={{
          border: '6px dotted pink',
          margin: '20px 10px',
        }}
      >
        <h3>Rainy</h3>
        <p>
          The rainy season changes the atmosphere of the surroundings. The
          temperature gets lower and the environment becomes cool
        </p>
      </div>
      <br />
      <div
        id="spring"
        style={{
          border: '5px solid green',
          margin: '8px',
        }}
      >
        <p>
          The spring season is a time of year when the weather starts to change.
          It is a transition season between the winter and summer seasons
        </p>
      </div>
      <br />
    </div>
  );
}


export default App;
