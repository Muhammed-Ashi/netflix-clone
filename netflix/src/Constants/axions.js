import axios from "axios"
import {Baseurl}from '../Constants/Constants'
const instance = axios.create({
    baseURL: Baseurl,
  
  });

  export default instance