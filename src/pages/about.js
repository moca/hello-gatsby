import React, { useDebugValue } from 'react'
import Header from "../components/header"
import {Link} from "gatsby"

export default function About(){
  return (
    <div style={{ color: `teal`}}>
      <Link to="/contact/"> Contact </Link>
      <Header  headerText="About Gatsby"/>
      <Header  headerText="It is pretty cool"/>
      <p> Such wow, very React.</p>
    </div>
  )
}