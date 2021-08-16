import { makeObservable, observable, runInAction} from "mobx"
import {action} from "mobx"
import firebase from "../../Common/service"
import {v4 as uuidv4} from "uuid"

class VehicleMakeAddPage{
  constructor(rootStore){
    this.state={
      brand:"",
      redirect:false
    }

    makeObservable(this,{
      state:observable,
      setBrand:action,
      addVehicleMake:action,
      update:action,
      handleSubmit:action,
      redirect:action,
      redirectTrue:action
    })

    this.rootStore = rootStore
  }

  redirect(){
    this.state.redirect = false
  }

  redirectTrue(){
    this.state.redirect = true
  }

  setBrand(brand){
    this.state.brand = brand
  }

  addVehicleMake = async (items) =>{
    const id = await firebase.database().ref("vehicles").push().key
    this.update(id,items)
  }

  update(id,values){
    firebase.database().ref("vehicles").update({[id]: {...values}})
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = uuidv4()
    const brand = this.state.brand
    this.addVehicleMake({id,brand,})
    e.target.reset()
    runInAction( () => {
      this.redirectTrue()  
    })
  }
}

export default VehicleMakeAddPage