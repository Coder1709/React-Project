# React-Project


**1) > `Import the react and reactdom libraries`


import React from "react";
import  ReactDOM  from "react-dom/client";


**// 2) get a reference to the div with id root**

const el = document.getElementById('root');


**// 3) tell react to take control of that element


const root = ReactDOM.createRoot(el);



**//4) create a component


function App() {
    return <h1>Hi there</h1>
}


**//5) Show the component on the screen
 root.render(<App />)
 
 
 
 
 
 
 
 <h2>to solve the node error**</h2>
sudo apt-get remove nodejs
> sudo apt-get remove npm
> sudo rm /usr/local/bin/node
> sudo rm /usr/local/bin/npm
> sudo apt-get install nodejs
> sudo apt-get install npm
> 
> 
> 
> sudo npm install n -g
> sudo n stable
