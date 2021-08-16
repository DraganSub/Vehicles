import firebase from "../../Common/service"
import { makeObservable, observable, runInAction} from "mobx"
import {action} from "mobx"
import {v4 as uuidv4} from "uuid"


class EditVehicleMakeStore {
  constructor(rootStore){
      
    this.state={
      brand:"",
      redirect:false
    }

    makeObservable(this,{ 
      state:observable,
      updateBrand:action,
      update:action,
      getIdFromUrl:action,
      
    })

    this.rootStore = rootStore 
  }

  redirect(){
    this.state.redirect = false
  }

  updateBrand(brandValue){
    this.state.brand= brandValue
  }
  updateId(brandId){
    this.state.id = brandId
  }
  redirectTrue(){
    this.state.redirect = true
  }
  handleEdit = e => {
    e.preventDefault()
    const key = this.getIdFromUrl()
    const brand = this.state.brand
    const id = uuidv4()
    this.update(key,{id,brand})
    e.target.reset()
    runInAction(() => {
      this.redirectTrue()  
    })
    
  }
   
  getIdFromUrl= () =>{
    const str = window.location.pathname
    const char = str.split("/")
    const id = char[2]
    return id
  } 
  
  update(id,values){
    firebase.database().ref("vehicles").update({[id]: {...values}})
  }
}
  
export default EditVehicleMakeStore