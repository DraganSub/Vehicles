import { makeObservable, observable,action,computed, runInAction} from "mobx"
import sortItemsBy from "../../Common/sortItemsBy.jsx"
import firebase from "../../Common/service"
import getCurrentIndex from "../../Common/getCurrentIndex.jsx"


class VehicleMakeListStore{
  searchText = ""
  sortElements = {
    sortBy: "brand",
    direction: "ascending",
  }
  vehiclesPerPage=4
  constructor(rootStore){
    this.state = {
      vehiclesMake : [],
      currentPage: 1,  
    }
    this.rootStore = rootStore

    makeObservable(this, {
      state:observable,
      changeSearchText:action,
      setSortElements:action,
      vehiclesPerPage:observable,
      searchText:observable,
      sortElements:observable,
      setCurrentPage:action,
      filteredVehiclesMakeList:computed,
      currentVehiclesMakeList:computed,
      getVehicleMake:action,
      delete: action
    })
  }

  changeSearchText = (e) => {
    this.searchText = e.target.value
  }

  setSortElements = (sortBy, direction) => {
    this.sortElements = {sortBy, direction}
  }

  setCurrentPage = (pageNum) => {
    this.state.currentPage = pageNum
  }

  get filteredVehiclesMakeList(){
    const sortedVehiclesMake = sortItemsBy(this.state.vehiclesMake.slice(), this.sortElements.direction,this.sortElements.sortBy)
    return sortedVehiclesMake.filter(vehicle => {
      return(
        vehicle.brand.toLowerCase().includes(this.searchText)
      )
    })
  }

  get currentVehiclesMakeList(){
    return getCurrentIndex(this.filteredVehiclesMakeList,this.state.currentPage,this.vehiclesPerPage)
  }

  async getVehicleMake(){
    const ref = await firebase.database().ref("vehicles")
    ref.on("value",(snapshot) => {
      runInAction(() =>{
        let result = []
        snapshot.forEach((item) => {
          result.push({...item.val(), key:item.key})
        })
        this.state.vehiclesMake = [...result]
      })
    })
  }

  async delete(id){
    const ref = await firebase.database().ref("vehicles")
    ref.child(id).remove()
  }
}

export default VehicleMakeListStore