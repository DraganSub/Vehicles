import React from "react"
import { inject, observer } from "mobx-react"
import { Link} from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Navigation from "../../Components/Navigation"
import Pagination from"../../Components/Pagination"
import SearchFilterInput from "../../Components/SearchFilter"
import SortOption from "../../Components/SortingOptions"



class ListVehicleMake extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.rootStore.vehicleMakeListStore.getVehicleMake() 
    this.props.rootStore.vehicleMakeAddStore.redirect()
    this.props.rootStore.vehicleMakeEditStore.redirect()
  }

  render(){

    const vehiclesMake = this.props.rootStore.vehicleMakeListStore

    return(

      <React.Fragment>
      
        <AppBar position="relative" color="secondary">
          <Navigation />
        </AppBar>

        <div className="vehicleMake-addBtn">
          <Link to={"/addVehiclesMake"} >
            <button className="vehicleMake-list-addBtn">
              Add Vehicle Make
            </button>
          </Link>
        </div>

        <div>
          <SearchFilterInput 
            onChange={vehiclesMake.changeSearchText}
            placeholder="Search vehicle by make"
            searchText={vehiclesMake.searchText}
          />
        </div>

        <div className="vehicleMake-sortContainer">
          <SortOption onSort={vehiclesMake.setSortElements} sortBy="brand" />
        </div>
  
        <div className="vehicleMake-list-container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Vehicle Make ID</th>
                <th scope="col">Vehicle Make Brand</th>
                <th scope="col">Options</th>
              </tr>
            </thead> 
            <tbody>
              {vehiclesMake.currentVehiclesMakeList.map((vehicle) => (
                <tr key={vehicle.key}>
                  <td>{vehicle.id}</td>
                  <td className="vehicleMakeBrand">{vehicle.brand}</td>
                  <td>
                    <Link to={`/listVehiclesMake/${vehicle.key}` } >
                      <button className="vehicleMake-editBtn">
                        Edit
                      </button>
                    </Link>
                    <button className="vehicleMake-deleteBtn" onClick={() => vehiclesMake.delete(vehicle.key)}>
                      Delete
                    </button>
                  </td>                     
                </tr>          
              ))}
            </tbody>
          </table>
          <Pagination 
            vehiclesPerPage={vehiclesMake.vehiclesPerPage}
            totalVehicles={vehiclesMake.filteredVehiclesMakeList.length}
            setCurrentPage={vehiclesMake.setCurrentPage}
          />
        </div>

      </React.Fragment>        
    )
  }
}

export default inject("rootStore")(observer(ListVehicleMake))