
import VehiclesStore from "../Pages/VehicleModel/ListVehiclesStore.jsx"
import EditVehicleStore from "../Pages/VehicleModel/EditVehiclesStore.jsx"
import AddVehicleStore from "../Pages/VehicleModel/AddVehicleStore.jsx"
import VehicleMakeAddStore from "../Pages/VehicleMake/VehicleMakeAddStore.jsx"
import VehicleMakeListStore from "../Pages/VehicleMake/VehicleMakeListStore.jsx"
import VehiclesMakeEditStore from "../Pages/VehicleMake/VehicleMakeEditStore"


class RootStore  {
  constructor(){
    this.vehiclesStore = new VehiclesStore(this)
    this.editVehicleStore = new EditVehicleStore(this)
    this.addVehicleStore = new AddVehicleStore(this)
    this.vehicleMakeAddStore= new VehicleMakeAddStore(this)
    this.vehicleMakeListStore = new VehicleMakeListStore(this)
    this.vehicleMakeEditStore = new VehiclesMakeEditStore(this)
  }
}

export default RootStore