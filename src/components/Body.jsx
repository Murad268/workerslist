import React, {useEffect} from 'react';
import BodyEl from './BodyEl';
import { loadDatas } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
const Body = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadDatas());
   }, [])
   const workers = useSelector(state => {
      return {
         workerslist: state.loadReducer
      }
   })


   return (
      <div className='body'>
         {
           workers.workerslist?.length>0?
           workers.workerslist?.map((worker, index) => {
            return <BodyEl key={worker.id} worker={worker} index={index}/>
         })
            :"Məlumat yoxdur"
         }
         
      </div>
   );
};

export default Body;