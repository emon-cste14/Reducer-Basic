import React,{useReducer,useRef} from 'react'
import { initialState, PatientReducer } from '../Reducer/Reducer'

export default function PatientManage() {
    let inputValue;
    const [state, dispatch] = useReducer( PatientReducer, initialState)
    function SetName(e){
        inputValue =e.target.value;
    }
   function FormSubmit(e){
       e.preventDefault()
       dispatch({
           type:'ADD_PATIENT',
           name:inputValue,
           id:state.patient.length
       })
       inputValue='';

   }
    return (
        <div>
            <h1>This is Patient Management System</h1>
            <h2>Patient:{state.patient.length}</h2>
             <form action="" onSubmit={FormSubmit}>
                <input  onChange={SetName}/>
             </form>
             {
                 state.patient.map(res=><li kye={res.id} onClick={()=>dispatch({type:'REMOVE_PATIENT',id:res.id})}>{res.name}</li>)
             }
        </div>
    )
}
