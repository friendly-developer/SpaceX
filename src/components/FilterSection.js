import React, { Component } from "react";
import {
  FILTER_TYPES,
  YEARS,
  LAUNCH,
  LANDING,
} from "../constants/filterConstants";
import styles from "../styles/filters.module.css";

class FilterSection extends Component {
  onFilterClick(t, e) {
    const { onSelect, selected } = this.props;
    e.stopPropagation();
    if (e.target.nodeName.toLowerCase() !== "span") return;

    let val = e.target.textContent === selected ? "" : e.target.textContent;
    if (onSelect) {
      onSelect(t, val);
    }
  }

  renderHeader(type) {
    let header = "";

    switch (type) {
      case FILTER_TYPES.YEAR: {
        header = "Launch Year";
        break;
      }
      case FILTER_TYPES.LANDING: {
        header = "Succesful Landing";
        break;
      }
      case FILTER_TYPES.LAUNCH: {
        header = "Succesful Launch";
        break;
      }
      default: {
      }
    }
    return (
      <div>
        {header}
        <hr />
      </div>
    );
  }
  renderContent(type) {
    const { selected } = this.props;
    let items = [];
    switch (type) {
      case FILTER_TYPES.YEAR: {
        items = [...YEARS];
        break;
      }
      case FILTER_TYPES.LANDING: {
        items = [...LANDING];
        break;
      }
      case FILTER_TYPES.LAUNCH: {
        items = [...LAUNCH];
        break;
      }
      default: {
      }
    }
    const filterItems = items.map((item) => (
      <span
        key={`${item}_${type}`}
        className={`${styles.filterItem} ${
          selected === item.toString() ? styles.selectedFilterItem : ""
        }`}
      >
        {item}
      </span>
    ));

    return (
      <div
        className={styles.section}
        onClick={(e) => {
          this.onFilterClick(type, e);
        }}
      >
        {filterItems}
      </div>
    );
  }

  render() {
    const { type } = this.props;

    return (
      <>
        {this.renderHeader(type)}

        {this.renderContent(type)}
      </>
    );
  }
}
export default FilterSection;
