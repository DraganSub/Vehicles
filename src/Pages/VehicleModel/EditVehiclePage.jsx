import { observer,inject } from "mobx-react"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import Navigation from "../../Components/Navigation"
import React from "react"
import {Redirect } from "react-router-dom"


class EditVehicle extends React.Component{
  constructor(props){
    super(props)
  }  

  componentDidMount(){
    this.props.rootStore.vehiclesStore.getvehicle()
  }

  render(){
       
    const vehiclesStore = this.props.rootStore.vehiclesStore
    const editVehicleStore = this.props.rootStore.editVehicleStore
        
    return(
      <React.Fragment>
        
        <AppBar position="relative" color="secondary">
          <Navigation /> 
        </AppBar>

        <div className="container py-4" id="container-edit-page">
          {vehiclesStore.state.vehicles.map(vehicle => ( 
            (editVehicleStore.getIdFromUrl() === vehicle.key ) ? 
              <div key={vehicle.key} className="row align-items-md-stretch">
                <div style={{textAlign:"center"}} className="col-md-6">
                  <div className="h-100 p-5 bg-light border rounded-3">
                    <img  src={vehicle.imageUrl} style={{width:"80%"}}/>
                    <p>{vehicle.brand}   {<br />}</p> 
                    <p>{vehicle.info}  {<br />}</p> 
                    <p> Vehicle model: {vehicle.model}  {<br />}</p> 
                  </div>
                </div>

                <div style={{display:"table-caption"}} className="col-md-6">
                  <h1 style={{textAlign:"center"}}>Edit Vehicle</h1>
                  <form onSubmit={(e)=>editVehicleStore.handleEdit(e)}>

                    {editVehicleStore.state.redirect ?  
                      <Redirect to="/listVehicles" />
                      :null
                    }

                    <div className="form-floating">
                      <input
                        type="text"
                        name="brand"
                        value={editVehicleStore.state.brand}
                        onChange={event => editVehicleStore.updateBrand(event.target.value)}
                        className="form-control"
                        id="brandLabel"
                      />
                      <label htmlFor="brandLabel">Brand</label>
                    </div>

                    <div className="form-floating">
                      <input 
                        type="text"
                        name="info"
                        value={editVehicleStore.state.info}
                        onChange={event => editVehicleStore.updateInfo(event.target.value)}
                        className="form-control"
                        id="infoLabel"
                      />
                      <label htmlFor="infoLabel">Info</label>
                    </div>

                    <div className="form-floating">
                      <input 
                        type="text"
                        name="imageUrl"
                        value={editVehicleStore.state.imageUrl}
                        onChange={event => editVehicleStore.updateImageUrl(event.target.value)}
                        placeholder={vehicle.imageUrl}
                        className="form-control"
                        id="imageUrlLabel"
                      />
                      <label htmlFor="imageUrlLabel" style={{fontSize:"13px"}}>{vehicle.imageUrl}</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="text"
                        name = "model"
                        value={editVehicleStore.state.model}
                        onChange={event => editVehicleStore.updateModel(event.target.value)}
                        className="form-control"
                        id="modelLabel"
                      />
                      <label htmlFor="modelLabel">Model</label>
                    </div>
                
                    <button className="w-100 btn btn-lg btn-primary"> 
                      Edit vehicle
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

export default inject("rootStore")(observer(EditVehicle))