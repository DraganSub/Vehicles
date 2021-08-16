/* Sort Buttons config */

export default function SortButton(props){
  function handleSorting() {
    props.onClick(props.sortBy, props.direction)
  }
  return(
    <button className="sort-button" onClick={handleSorting}>
      {props.direction==="ascending" ? "A to Z" : "Z to A"}
    </button>
  )
}