import { useState } from "react";
import { puppyList } from "./data.js"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("PuppyList: ", puppies);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div className="App">

        {puppies.map((puppy) => {
          return <p className="button" onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
        })}
        {featPupId && <p>ID of Puppy: {featPupId}</p>}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li className="list">
                <h4>Age: {featuredPup.age}</h4>
              </li>
              <li className="list">
                <h4>Email: {featuredPup.email}</h4>
              </li>
            </ul>
          </div>
        )}

        <button className="btn btn-primary" onClick={() => { location.reload() }}>Reset Page</button>
      </div>
    </>
  )
}

export default App
