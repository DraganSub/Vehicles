import React from "react"
import { inject, observer } from "mobx-react"
import { Link} from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import  useStyles  from "../../Layouts/makeStyles"
import Container from "@material-ui/core/Container"
import Navigation from "../../Components/Navigation"
import Pagination from"../../Components/Pagination"
import SearchFilter from "../../Components/SearchFilter"
import SortingOptionsBox from "../../Components/MultipleSortingOptions"



class ListVehicle extends React.Component{
  currentPage=1
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.rootStore.vehiclesStore.getvehicle()   
    this.props.rootStore.editVehicleStore.redirect()
    this.props.rootStore.addVehicleStore.redirect()  
  
  }

  render(){
  
    const classes = useStyles
    const vehicleStore = this.props.rootStore.vehiclesStore

    return(

      <div>
        <React.Fragment>
          
          <AppBar position="relative" color="secondary">
            <Navigation />  
          </AppBar>

          <main>
            <div className="vehicleModel-addBtn">
              <Link to={"/addVehicles"} >
                <button className="vehicleModel-list-addBtn">
                  Add Vehicle Model
                </button>
              </Link>
            </div>
            <SearchFilter 
              onChange={vehicleStore.changeSearchText}
              placeholder="search"
              searchText={vehicleStore.searchText}
            />

            <SortingOptionsBox onSort ={vehicleStore.setSortElements} />
        
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
    
                {vehicleStore.currentVehicles.map((vehicle) => (
                  <Grid item key={vehicle.key} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>

                      <CardMedia
                        component="img"
                        className={classes.media}
                        style={{width:"100%",height:"auto"}}
                        src={vehicle.imageUrl}
                        title={vehicle.model}
                      />

                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {vehicle.model}
                        </Typography> 
                        <Typography className="brand-dark-color">
                          {vehicle.brand}
                        </Typography>
                        <Typography>
                          {vehicle.info.substring(0, 50) + "..."}
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <Link to={`/listVehicles/${vehicle.key}`} >
                          <button className="editBtnVehicleModel">
                            Edit
                          </button>
                        </Link>
                        <button className="deleteBtnVehicleModel" onClick={() => vehicleStore.delete(vehicle.key)}>
                          Delete
                        </button>
                      </CardActions>

                    </Card>

                  </Grid>
                ))}
              </Grid> 

              <Pagination 
                vehiclesPerPage={vehicleStore.vehiclesPerPage}
                totalVehicles={vehicleStore.filteredVehicles.length}
                setCurrentPage={vehicleStore.setCurrentPage}
              />
            </Container>

          </main>
        </React.Fragment>        
      </div>
    )
  }
}

export default inject("rootStore")(observer(ListVehicle))