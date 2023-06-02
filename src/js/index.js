//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'

// include your styles into the webpack bundle
import "../styles/index.css";
{/*import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'; {/*importa la libreria font awesome*/}
{/*import{faClock} from '@fortawesome/free-solid-svg-icons';import { func } from "prop-types";{/*importa el icono font awesome*/}

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
