import {db} from "../../configration/firebase";
 export const fetchstudents = (setloading) => async(dispatch,previousState)=>{
try {
    setloading(true)
    let res = await db.collection("students").get();
let student_data = [];
res.forEach((doc)=>{
    student_data.push({
        docid: doc.id,
        ...doc.data()
    });
});

dispatch({
    type : "Fetch_students",
    payload : student_data
})
} catch (error) {
    console.log("Error");
}
finally{
setloading(false)
}
}
 export const addstudents = (studenttofirebase)=> async(dispatch,previousState)=>{
    const add = await db.collection("students").add(studenttofirebase);
   console.log("data added in firbase",studenttofirebase);

   dispatch({
    type: "ADD_STUDENT",
    payload: studenttofirebase,
  });

}