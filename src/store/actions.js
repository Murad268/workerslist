import axios from "axios";
import { LOAD, LIKE, DELETE, ADD, CHANGE, SEARCH } from "./types";

export function loadDatas() {
      return async dispatch => {
         try{
            await axios.get(`http://itmurad.epizy.com/workerslist/backend/api.php`).
            then((res) => {
               dispatch({
                  type: LOAD,
                  data: res.data
               })  
            })       
         } catch(e) {    
      }
   }
}


export function likeWorker(id) {
   return async dispatch => {
      try{
         await axios.get(`http://itmurad.epizy.com/workerslist/backend/like.php?id=`+id).
         then((res) => {
            dispatch({
               type: LIKE,
               data: res.data
            })  
         })       
      } catch(e) {    
   }
}
}


export function deleteWorker(id) {
   return async dispatch => {
      try{
         await axios.get(`http://itmurad.epizy.com/workerslist/backend/delete.php?id=`+id).
         then((res) => {
            dispatch({
               type: DELETE,
               data: res.data
            })  
         })       
      } catch(e) {    
   }
}
}

const config = {
   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}
export function add (e, values) {
   e.preventDefault();
   return async dispatch => {
      try{
         await axios.post("http://itmurad.epizy.com/workerslist/backend/add.php", values, config).
         then((res) => {
            dispatch({
               type: ADD,
               data: res.data
            })  
         })       
      } catch(e) {    
   }
}
   };




   export function change (e, values,id) {
      e.preventDefault();
      return async dispatch => {
         try{
            axios.post("http://itmurad.epizy.com/workerslist/backend/updated.php?id="+id, values, config).
            then((res) => {
               dispatch({
                  type: CHANGE,
                  data: res.data
               })  
            })       
         } catch(e) {    
      }
   }
};



export function axtar (e, v) {
   e.preventDefault();
   return async dispatch => {
      try{
         axios.post("http://itmurad.epizy.com/workerslist/backend/seacrh.php", v, config).
         then((res) => {
            dispatch({
               type: SEARCH,
               data: res.data
            })  
         })       
      } catch(e) {    
   }
}
};


