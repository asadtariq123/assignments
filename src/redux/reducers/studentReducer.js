let intialstate = {
    student:[],
}
function studentReducer(state=intialstate,action){
    switch (action.type) {
        case "Fetch_students":
            //console.log("data from action into reducer",action.payload);
            return {
                ...state,
                student:action.payload,
            }
            case "ADD_STUDENT":
      console.log("data in reducer from action", action.payload);
      // work  / logic will be her
      let newStudents = state.student;
      newStudents.push(action.payload)
      return {
        ...state,
        student: newStudents
      }
            
    
         default:
             return state
    }

}
export default studentReducer;