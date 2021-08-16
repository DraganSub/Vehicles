import React from "react"
import { inject, observer } from "mobx-react"
import Toolbar from "@material-ui/core/Toolbar"
import Navigation from "../../Components/Navigation"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import {Redirect} from "react-router-dom"

class AddVehicle extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.rootStore.vehicleMakeListStore.getVehicleMake()
  }

  render(){
    const addVehicle = this.props.rootStore.addVehicleStore
   
    return(  
      <React.Fragment>
        
        <AppBar position="relative" color="secondary">
          <Navigation /> 
        </AppBar>
        
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h3" align="center" color="textPrimary" className="add_title" gutterBottom>
            Add New Vehicle
          </Typography> 

          <form onSubmit={e => addVehicle.handleSubmit(e)}>
            {addVehicle.state.redirect ?
              <Redirect to="/listVehicles" />        
              :null
            }
            <div className="form-floating">
              <input
                type="text"
                name="brand"
                onChange={(event) => addVehicle.setBrand(event.target.value)}
                placeholder="Add a vehicle brand"
                className="form-control"
                id="floatingBrand"
              />
              <label htmlFor="floatingBrand">Brand</label>
            </div>
        
            <div className="form-floating">
              <input 
                type="text"
                name="info"
                onChange={(event) => addVehicle.setInfo(event.target.value)}
                placeholder="Add a vehicle info"
                className="form-control"
                id="floatingInfo"
              />
              <label htmlFor="floatingInfo">Info</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                name = "imageUrl"
                onChange={(event) => addVehicle.setImageUrl(event.target.value)}
                placeholder="Add a vehicle image url"
                className="form-control"
                id="floatingImageUrl"
              />
              <label htmlFor="floatingImageUrl">ImageUrl</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                name = "model"
                onChange={(event) => addVehicle.setModel(event.target.value)}
                placeholder="Add a vehicle model"
                className="form-control"
                id="floatingModel"
              />
              <label htmlFor="floatingModel">Model</label>
            </div>
      
            <button className="w-100 btn btn-lg btn-primary"> 
              Add vehicle
            </button>
          </form>
        </Container>
        
      </React.Fragment>
    )
  }
}

export default inject("rootStore")(observer(AddVehicle))