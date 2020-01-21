import './lib/env';
import React from "react";
import ReactDOM from "react-dom";
import { HelloComponent } from "./hello";
import './styles.scss';
const logoImg = require('./assets/logo1.png');


const sampleNumber: number = 666;
console.log("hello parcel");
console.log(`Hello form sample ${ sampleNumber }`);
console.log(process.env);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

ReactDOM.render( <HelloComponent />, document.getElementById("root") );

ReactDOM.render( <h3>Ejemplo de variable de entorno DB_SAMPLE_USER: { process.env.DB_SAMPLE_USER }</h3>, document.getElementById("env") );