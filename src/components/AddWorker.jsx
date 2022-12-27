
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/actions';
const AddWorker = () => {
   const dispatch = useDispatch();
   const [values, setValues] = useState({
      "name": "",
      "surname": "",
      "salary": ""
   });
   
   const adding = () => {
      setValues({
         "name": "",
         "surname": "",
         "salary": ""
      })
   }
   const addworker = (e, values) => {
      dispatch(add(e, values))
     
   }
   return (
      <form onSubmit={(e)=>{
         addworker(e, values)
         adding()
      }}>
         <div className='addWorker'>
            <input value={values.name} onChange={e=>setValues(prev => ({...prev, name:e.target.value}))} placeholder='ad' name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <input value={values.surname} onChange={e=>setValues(prev => ({...prev, surname:e.target.value}))} placeholder='soyad' name="surname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                    
            <input value={values.salary} onChange={e=>setValues(prev => ({...prev, salary:e.target.value}))} placeholder='maaş' name="salary" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <button className="btn btn-success">Əlavə et</button>
         </div>
      </form>
   );
};

export default AddWorker;