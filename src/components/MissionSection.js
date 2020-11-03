import React, { Component } from "react";
import styles from "../styles/missions.module.css";

class MissionSection extends Component {
  render() {
    const {
      missionName,
      missionsIds = [],
      year,
      landing = false,
      launch = false,
      imageUrl = "",
    } = this.props.mission;
    return (
      <div className={styles.missionSection}>
        <div>
          <img
            src={imageUrl}
            className={styles.missionImg}
            alt={`${missionName} mission logo`}
          ></img>
        </div>
        <div className={styles.missionHeading}>
          <strong>{missionName}</strong>
        </div>
        <div className={styles.missionDetail}>
          <div className={styles.detailKey}>Mission Id</div>
          <ul>
            {missionsIds.map((id) => (
              <li className={styles.detailVal} key={id}>
                {id}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.missionDetail}>
          <div className={styles.detailKey}>Launch Year</div>
          <div className={styles.detailVal}>{year}</div>
        </div>
        <div className={styles.missionDetail}>
          <div className={styles.detailKey}>Succesful Launch</div>
          <div className={styles.detailVal}>{launch.toString()}</div>
        </div>
        <div className={styles.missionDetail}>
          <div className={styles.detailKey}>Succesful Landing</div>
          <div className={styles.detailVal}>{landing.toString()}</div>
        </div>
      </div>
    );
  }
}
export default MissionSection;
