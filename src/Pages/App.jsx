
import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import AddVehicle from "./VehicleModel/AddVehiclePage"
import ListVehicles from "./VehicleModel/ListVehiclesPage"
import * as ROUTES from "../Common/constants/routes.jsx"
import EditVehicle from "./VehicleModel/EditVehiclePage"
import HomePage from "../Layouts/HomePage"
import { Router,RouterStore} from "react-router-mobx"
import { BrowserRouter,  Route } from "react-router-dom"
import AddVehicleMake from "./VehicleMake/VehicleMakeAddPage"
import ListVehicleMake from "./VehicleMake/VehicleMakeListPage"
import VehicleMakeEditPage from "./VehicleMake/VehicleMakeEditPage"
const routerStore = new RouterStore()

class App extends Component {

  render() { 
    return (
      <div>
        <Router component={BrowserRouter} routerStore={routerStore}>
          <div>  
            <Route exact path={routerStore.location.push=ROUTES.HOME} component={HomePage}/>

            {/* routes for vehicles model */}
            <Route exact path={routerStore.location.push=ROUTES.LIST_VEHICLE} component={ListVehicles} />
            <Route exact path={routerStore.location.push=ROUTES.ADD_VEHICLE} component={AddVehicle} />
            <Route path={routerStore.location.push=ROUTES.EDIT_VEHICLE} component={EditVehicle}/>

            {/* routes for vehicles make */}
            <Route exact path={routerStore.location.push=ROUTES.LIST_VEHICLE_MAKE} component={ListVehicleMake} />
            <Route exact path={routerStore.location.push=ROUTES.ADD_VEHICLE_MAKE} component={AddVehicleMake} />
            <Route  path={routerStore.location.push=ROUTES.EDIT_VEHICLE_MAKE} component={VehicleMakeEditPage} />
          </div> 
        </Router>
      </div>
    )
  }
} 
export default inject("rootStore")(observer(App))
