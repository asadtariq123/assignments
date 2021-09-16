import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchstudents } from "../../../../redux/actions/studentActions";
import { useSelector } from "react-redux";
import { addstudents } from "../../../../redux/actions/studentActions";

function useStudents(){
   const dispatch = useDispatch();
   //
      const students = useSelector(state => state.studentReducer.student)
    //console.log("students from studentReducer",students);
    
    const [name,setname] = useState();
    const [class1,setclass] = useState();
    const [cellno,setcellno] = useState();
    const [email,setemail] = useState();
    
    const [loading,setloading] = useState(false);
    function ctahandler (){
        
        let studenttofirebase = {
            name,
            class:class1,
            cellno,
            email
        }
        alert(studenttofirebase)
        dispatch(addstudents(studenttofirebase))
        

    }
    useEffect(()=>{
        dispatch(fetchstudents(setloading))
    },[])
 



    return[students,name,setname,class1,setclass,cellno,setcellno,email,setemail,loading,setloading,ctahandler]
}
export default useStudents;