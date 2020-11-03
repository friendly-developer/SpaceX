import React, { Component } from "react";
import MissionSection from "./MissionSection";
import styles from "../styles/missions.module.css";

class Missions extends Component {
  render() {
    const { missions = [] } = this.props;

    return (
      <div className={styles.component}>
        {missions.length === 0 && (
          <div>
            No items to display under these filters. Try changing your filters.
          </div>
        )}
        {missions.map((mission) => (
          <MissionSection key={mission.missionName} mission={mission} />
        ))}
      </div>
    );
  }
}
export default Missions;
