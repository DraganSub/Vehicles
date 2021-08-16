import { makeObservable,observable, runInAction} from "mobx"
import {action} from "mobx"
import firebase from "../../Common/service"
import {v4 as uuidv4} from "uuid"


class AddVehicleStore{
  constructor(rootStore){
    this.rootStore = rootStore

    this.state={
      brand:"",
      info:"",
      model:"",
      imageUrl: "",
      redirect: false
    }
    makeObservable(this,{ 
      state:observable,
      setBrand:action,
      setImageUrl:action,
      setModel:action,
      setInfo:action,
      redirect:action
    })

  }

  redirect(){
    this.state.redirect = false
  }
  setBrand(brand){
    this.state.brand = brand
  }

  redirectTrue(){
    this.state.redirect = true
  }

  setInfo(info){
    this.state.info = info
  }

  setModel(model){
    this.state.model = model
  }

  setImageUrl(imgUrl){
    this.state.imageUrl = imgUrl
  }


  addvehicle = async (items) =>{
    const id = await firebase.database().ref("cars").push().key
    runInAction(() =>{
      this.rootStore.editVehicleStore.update(id,items)
    })
   
  }

  handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    const id = uuidv4()
    const brand = this.state.brand
    const info = this.state.info
    const model = this.state.model
    const imageUrl = this.state.imageUrl
    this.addvehicle({id,brand,info,model,imageUrl})
    runInAction(() => {
      this.redirectTrue()
    })
    
    
  };
}

export default AddVehicleStore