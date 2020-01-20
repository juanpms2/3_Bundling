import React from 'react';
import ReactDOM from 'react-dom';
const logoImg = require("./assets/logo1.png");
const classes = require('./styles.scss');

ReactDOM.render(
    <div>
        <h1 className={classes.styleReact}>Hola mundo con React!!</h1>
    </div>,
    document.getElementById("root")
);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);