import {getData} from "./api.js";


const loadApp = () => {
    getData(); 
}

window.addEventListener('load',loadApp);