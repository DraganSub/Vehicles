import React from "react"
import SortOption from "./SortingOptions"

export default function SortingOptionsBox(props) {
  return(
    <div className="sort-container"> 
      <div className="sort-container-option-1">
        <h3 className="sort-option-brand">Sort by brand</h3>
        <SortOption onSort={props.onSort} sortBy="brand" />
      </div>
      <div className="sort-container-option-2">
        <h3 className="sort-option-brand">Sort by model</h3>
        <SortOption onSort={props.onSort} sortBy="model" />
      </div>
    </div>
  )
}