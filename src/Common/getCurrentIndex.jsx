/* function to get array index for pagination*/

export default function getCurrentIndex(array, currentPage, ElementsPerPage) {
  const indexOfLastCard = currentPage * ElementsPerPage
  const indexOfFirstCard = indexOfLastCard - ElementsPerPage
  const currentElements = array.slice(indexOfFirstCard, indexOfLastCard)
  return currentElements
}