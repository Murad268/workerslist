import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { likeWorker, deleteWorker, change } from '../store/actions';
const BodyEl = ({worker, index}) => {
   const className = worker.liked==0?"fa fa-thumbs-up":"fa fa-thumbs-up liked"
   const [state, setState] = useState({
      name: worker.name,
      surname: worker.surname,
      salary: worker.salary
   });

   const dispatch = useDispatch();
   const like = (id) => {
      dispatch(likeWorker(id))
   }
   const deleted = (id) => {
      dispatch(deleteWorker(id))
   }
   const changeBlock = (index) => {
      document.querySelectorAll(".BodyElBottom")[index].classList.add("nonOr")   
   }
 
   const closeBlock = (index) => {
      document.querySelectorAll(".BodyElBottom")[index].classList.remove("nonOr")   
   }

   return (
      <>
              <div className='BodyEl'>
                  <div className="BodyElTop">
                     <div className="BodyElName">{worker.name} <span style={{"padding": 4}}></span>{worker.surname}</div>
                     <div className="BodyElSalary">{worker.salary}$</div>
                     <div className="BodyElControlls">
                        <div onClick={() => like(worker.id)} className="BodyElControllsLike">
                           <i className={className} aria-hidden="true"></i>
                        </div>
                        <div onClick={() => deleted(worker.id)} className="BodyElControllsDelete">
                           <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                        <div onClick={()=>changeBlock(index)} className='editWorker'>
                           <i className="fas fa-edit"></i>
                        </div>
                     
                     </div>
                  </div>
               </div>
               <div className='BodyEl BodyElBottom'>
                  <form onSubmit={e => dispatch(change(e, state, worker.id))}>
                     <div className="BodyElTop">
                        <input onChange={e => setState(prev => ({...prev, name: e.target.value}))} name="name" placeholder="yeni ad" type="text" />
                        <input onChange={e => setState(prev => ({...prev, surname: e.target.value}))} name="surname" placeholder="yeni soyad" type="text" />
                        <input onChange={e => setState(prev => ({...prev, salary: e.target.value}))} name="salary" placeholder="yeni maaş" type="text" />
                        <button className='btn btn-primary'>yenilə</button>
                        <div className="BodyElControlls">
                           <div onClick={()=>closeBlock(index)} className='closeBlock'>
                              <i className="fa fa-window-close" aria-hidden="true"></i>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
      </>
   );
};

export default BodyEl;