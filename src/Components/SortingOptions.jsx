import SortButton from "./SortButtonConfig"

export default function SortOption(props) {
  return(
    <div className="sort-option">
            
      <SortButton
        sortBy={props.sortBy}
        direction="ascending"
        onClick={props.onSort}
      />
      
      <SortButton
        sortBy={props.sortBy}
        direction="descending"
        onClick={props.onSort}
      />

    </div>
  )
}