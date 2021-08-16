import firebase from "../../Common/service"
import { makeObservable, observable, runInAction} from "mobx"
import {action} from "mobx"
import {v4 as uuidv4} from "uuid"

class EditVehicleStore {
  constructor(rootStore){
    
    this.state={
      brand:"",
      info:"",
      model:"",
      imageUrl: "",
      redirect:false

    }
    makeObservable(this,{ 
      state:observable,
      updateBrand:action,
      updateInfo:action,
      updateModel:action,
      updateImageUrl:action,
      update:action,
      getIdFromUrl:action,
      redirect:action
    })

    this.rootStore = rootStore 
  }

  updateBrand(brandValue){
    this.state.brand= brandValue
  }

  redirect(){
    this.state.redirect = false
  }

  redirectTrue(){
    this.state.redirect = true
  }

  updateInfo(infoValue){
    this.state.info = infoValue
  }

  updateModel(modelValue){
    this.state.model = modelValue
  }

  updateImageUrl(imgUrlValue){
    this.state.imageUrl =  imgUrlValue
  }

  handleEdit = e => {
    e.preventDefault()
    const key = this.getIdFromUrl()
    const id = uuidv4()
    const brand = this.state.brand
    const info = this.state.info
    const model = this.state.model
    const imageUrl = this.state.imageUrl
    this.update(key,{id,brand,info,model,imageUrl})
    runInAction(() => {
      this.redirectTrue()
    })
    
    e.target.reset()
  }
 
    getIdFromUrl= () =>{
      const str = window.location.pathname
      const char = str.split("/")
      const id = char[2]
      return id
    } 

    update(id,values){
      firebase.database().ref("cars").update({[id]: {...values}})
    }
}

export default EditVehicleStore