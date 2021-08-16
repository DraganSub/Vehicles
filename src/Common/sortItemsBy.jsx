export default function sortItemsBy (array, direction, sortByKey) {
  if (direction === "ascending") {
    return array.sort((a, b) => {
      if (typeof a[sortByKey] === "string") {
        return a[sortByKey].toLowerCase() > b[sortByKey].toLowerCase() ? 1 : -1
      } else {
        return a[sortByKey] > b[sortByKey] ? 1 : -1
      }
    })
  } else if (direction === "descending") {
    return array.sort((a, b) => {
      if (typeof a[sortByKey] === "string") {
        return a[sortByKey].toLowerCase() < b[sortByKey].toLowerCase() ? 1 : -1
      } else {
        return a[sortByKey] < b[sortByKey] ? 1 : -1
      }
    })
  }
}