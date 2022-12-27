import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { axtar } from '../store/actions';
function Search({search}) {
   const dispatch = useDispatch();
   const [state, setState] = useState({
      search: ""
   })

   
   return (
      <div className='search'>
         <form onSubmit={(e) => dispatch(axtar(e, state))}>
            <input  placeholder='axtar' onChange={e=>setState(prev => ({...prev, search: e.target.value}))} type="search" name="search" id="" />
         </form>
      </div>
   );
}

export default Search;