import React, { useState } from "react";
import Missions from "../components/Missions";
import Filters from "../components/Filters";
import styles from "../styles/container.module.css";
import getMissionsData from "../utils/missionsUtils";
import MISSION_RESPONSE from "../constants/MissionsResponse";

function App() {
  const [error, setError] = useState("");
  const [results, setResults] = useState(getMissionsData(MISSION_RESPONSE));
  const onSelect = (data, err) => {
    setResults(getMissionsData(data));
    setError(err);
  };

  return (
    <div className={styles.container}>
      <Filters onSelect={onSelect} />
      <Missions missions={results} error={error} />
    </div>
  );
}

export default App;
