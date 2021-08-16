import firebase from "../../Common/service"
import {makeObservable,observable,action,runInAction, computed} from "mobx"
import sortItemsBy from "../../Common/sortItemsBy.jsx"
import getCurrentIndex from "../../Common/getCurrentIndex.jsx"

class VehiclesStore {

  searchText = ""
  sortElements = {
    sortBy: "make",
    direction: "ascending",
  }
  vehiclesPerPage = 6

  constructor(rootStore){
    this.state = {
      vehicles : [],
      currentPage :1     
    }

    makeObservable(this, {
      state: observable,
      searchText:observable,
      sortElements:observable,
      vehiclesPerPage:observable,
      changeSearchText:action,
      setSortElements:action,
      setCurrentPage:action,
      filteredVehicles:computed,
      currentVehicles:computed, 
      getvehicle:action,
      delete:action
    })
    this.rootStore =rootStore
  }
  
  changeSearchText = (event) => {
    this.searchText = event.target.value
  }

  setSortElements = (sortBy, direction) => {
    this.sortElements = {sortBy, direction}
  }

  setCurrentPage = (pageNum) => {
    this.state.currentPage = pageNum
  }
  
  get filteredVehicles(){
    const sortedVehicles = sortItemsBy(this.state.vehicles.slice(), this.sortElements.direction, this.sortElements.sortBy)
    return sortedVehicles.filter(vehicle => {
      return(
        vehicle.brand.toLowerCase().includes(this.searchText) || vehicle.model.toLowerCase().includes(this.searchText)
      )
    })
  }

  get currentVehicles(){
    return getCurrentIndex(this.filteredVehicles,this.state.currentPage,this.vehiclesPerPage)
  }

  async getvehicle(){
    const ref = await firebase.database().ref("cars")
    ref.on("value",(snapshot) => {
      runInAction(() =>{
        let result = []
        snapshot.forEach((item) => {
          result.push({...item.val(), key:item.key})
        })
        this.state.vehicles = [...result]
      })
    })
  }
      
     
      delete = (id) => {
        firebase.database().ref("cars").child(id).remove()
      }
}

export default VehiclesStore