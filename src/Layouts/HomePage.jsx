import React from "react"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Navigation from "../Components/Navigation"

export default function HomePage() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Navigation />
      </AppBar>
      <section className="hero">
      </section>
    </React.Fragment>
  )
}

