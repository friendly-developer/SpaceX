import React, { Component } from "react";
import axios from "axios";
import FilterSection from "./FilterSection";
import styles from "../styles/filters.module.css";
import { FILTER_TYPES } from "../constants/filterConstants";

const fetchData = async (state, onSelect) => {
  const {
    year: launch_year = "",
    launch: launch_success = "",
    landing: land_success = "",
  } = state;
  const baseUrl = "https://api.spaceXdata.com/v3/launches";
  try {
    const { data } = await axios.get(baseUrl, {
      params: { limit: 100, launch_success, launch_year, land_success },
    });
    onSelect(data);
  } catch (err) {
    onSelect([], err);
  }
};

class Filters extends Component {
  state = { year: "", launch: "", landing: "" };

  onFilterSelect(type, val) {
    this.setState({ [type]: val });
    localStorage[type] = val;
  }
  onClearFilters(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ year: "", launch: "", landing: "" });
    localStorage.clear();
  }
  componentDidMount() {
    const { year, launch, landing } = localStorage;
    this.setState({ year, launch, landing });
  }
  componentDidUpdate(prevProps, prevState) {
    const { year, launch, landing } = this.state;
    if (
      prevState.year !== year ||
      prevState.launch !== launch ||
      prevState.landing !== landing
    ) {
      this.fetchData();
    }
  }
  fetchData() {
    const { onSelect } = this.props;
    fetchData(this.state, onSelect);
  }
  render() {
    const { year = "", launch = "", landing = "" } = this.state;
    return (
      <div className={styles.component}>
        <div className={styles.header}>Filters</div>
        <FilterSection
          type={FILTER_TYPES.YEAR}
          onSelect={(t, v) => {
            this.onFilterSelect(t, v);
          }}
          selected={year}
        />
        <FilterSection
          type={FILTER_TYPES.LAUNCH}
          onSelect={(t, v) => {
            this.onFilterSelect(t, v);
          }}
          selected={launch}
        />
        <FilterSection
          type={FILTER_TYPES.LANDING}
          onSelect={(t, v) => {
            this.onFilterSelect(t, v);
          }}
          selected={landing}
        />
        {(year || launch || landing) && (
          <div
            className={styles.clearFilter}
            onClick={(e) => this.onClearFilters(e)}
          >
            Clear Filters
          </div>
        )}
      </div>
    );
  }
}
export default Filters;
