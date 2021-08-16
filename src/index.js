import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import App from "./Pages/App"
import RootStore from "./Stores/rootStore.jsx"
import "./index.css"

const rootStore = new RootStore()

const Root =(
  <Provider rootStore={rootStore} >   
    <App />
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById("root")
)


