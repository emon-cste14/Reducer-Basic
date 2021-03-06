export const initialState={
    patient:[]
}

export function PatientReducer(state,action){
    switch(action.type){
        case 'ADD_PATIENT':
            const PatientDetail={
                id:action.id,
                name:action.name
            }
            const allPatient=[...state.patient,PatientDetail]
            return {patient:allPatient}
        case 'REMOVE_PATIENT':
            const RemainingPatient=state.patient.filter(res=>res.id!==action.id)
            const newState={patient:RemainingPatient}
            return newState;
            default:
                return state;

    }

}