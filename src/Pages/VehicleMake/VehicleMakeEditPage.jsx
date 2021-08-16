import { observer,inject } from "mobx-react"
import AppBar from "@material-ui/core/AppBar"
import Navigation from "../../Components/Navigation"
import React from "react"
import { Redirect} from "react-router-dom"

class VehicleMakeEditPage extends React.Component{
  constructor(props){
    super(props)
  }  
  
  componentDidMount(){
    this.props.rootStore.vehicleMakeListStore.getVehicleMake()
  }
  
  render(){
    const redirect = this.props.rootStore.vehicleMakeEditStore.state.redirect
    const vehicleMakeEdit = this.props.rootStore.vehicleMakeEditStore
    const vehicleMake = this.props.rootStore.vehicleMakeListStore.state.vehiclesMake
    return(
      <React.Fragment>
      
        <AppBar position="relative" color="secondary">
          <Navigation /> 
        </AppBar>
  
        <div className="container py-4" id="container-edit-page">

          {vehicleMake.map(vehicle => ( 
            (vehicleMakeEdit.getIdFromUrl() === vehicle.key ) ?

              <div key={vehicle.key} className="row align-items-md-stretch">
                <div style={{textAlign:"center"}} className="col-md-6">
                  <div className="h-100 p-5 bg-light border rounded-3">
                    <p> Vehicle brand: {vehicle.brand}  </p> 
                  </div>
                </div>
  
                <div style={{display:"table-caption"}} className="col-md-6">
                  <h1 style={{textAlign:"center"}}>Edit Vehicle</h1>

                  <form onSubmit={(e)=>vehicleMakeEdit.handleEdit(e)}>
                    {redirect ?
                      <Redirect to="/listVehiclesMake" />
                      :null
                    }
                    <div className="form-floating">
                      <input
                        type="text"
                        name="brand"
                        value={vehicleMakeEdit.state.brand}
                        onChange={event => vehicleMakeEdit.updateBrand(event.target.value)}
                        className="form-control"
                        id="brandLabel"
                      />
                      <label htmlFor="brandLabel">Brand</label>
                    </div>
  
                     
                    <button className="w-100 btn btn-lg btn-primary"> 
                      Edit
                    </button>
                  </form>
                </div>
              </div> : ""
          ))}
        </div>
        
      </React.Fragment>
    )
  }
}
  
export default inject("rootStore")(observer(VehicleMakeEditPage))