import React from "react"
import { inject, observer } from "mobx-react"
import Navigation from "../../Components/Navigation"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import {Redirect} from "react-router-dom"


class AddVehicleMake extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.rootStore.vehicleMakeListStore.getVehicleMake()
  }

  render(){
    const addVehicleMake = this.props.rootStore.vehicleMakeAddStore
    
    return(  
      <div>
        <React.Fragment>

          <AppBar position="relative" color="secondary">
            <Navigation />
          </AppBar>

          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" className="add_title" gutterBottom>
              Add New Vehicle Make
            </Typography> 

            <form onSubmit={e => addVehicleMake.handleSubmit(e)}>
              <div className="form-floating">
                {addVehicleMake.state.redirect ?     
                  <Redirect to="/listVehiclesMake" />
                  :null
                }

                <input
                  type="text"
                  name="brand"
                  onChange={(event) => addVehicleMake.setBrand(event.target.value)}
                  placeholder="Add a vehicle brand"
                  className="form-control"
                  id="floatingBrand"
                />
                <label htmlFor="floatingBrand">Brand</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary"> 
                Add vehicle Make
              </button>
            </form>
          </Container>

        </React.Fragment>
      </div>
    )
  }
}

export default inject("rootStore")(observer(AddVehicleMake))