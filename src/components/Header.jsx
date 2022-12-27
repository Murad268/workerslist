import React, {useEffect} from 'react';
import { loadDatas } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
   const dispatch = useDispatch();
   const workers = useSelector(state => {
      return {
         workerslist: state.loadReducer
      }
   })

   const getTotal = () => {
      if (!Array.isArray(workers.workerslist)) {
          return 0;
      }
      return workers.workerslist.reduce((a, b) => {
          return +a + +b.liked;
      }, 0)
  };


   useEffect(() => {
      dispatch(loadDatas());
   }, [])
   return (
      <div className='header'>
         <div className="workersCount">
            İşçilərin sayı: <span>{workers.workerslist.length}</span>
         </div>
         <div className="likedsCount">
            Bəyənilmiş işçilərin sayı: <span>{getTotal()}</span>
         </div>
      </div>
   );
};

export default Header;