import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Teacher_profile() {
  const params = useParams()
  const [teacher, setTeacher] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const teacher = await axios.get(`https://65e0807cd3db23f7624973ab.mockapi.io/teacher/${params.id}`)
      setTeacher(teacher.data)
      setLoading(false)
      
    }
    catch (error){
      alert("Error")
    }
  }

  return (
    <div className="container-fluid">
      
      <div className="row p-5">
        <h1>Id:{teacher.teacherId}</h1> <hr/>
        <div className="col-6">
           <h5>Name:{teacher.name}</h5> 
        </div>
        <div className="col-6">
        <h5>Email:{teacher.email}</h5> 
        </div>
        <div className="col-6">
        <h5>Department:{teacher.dept}</h5> 
        </div>
        <div className="col-6">
        <h5>Joining Date:{teacher.joiningdate}</h5> 
        </div>
        <div className="col-6">
        <h5>Gender:{teacher.gender}</h5>
        </div>
        <div className="col-6">
        <h5>Phone:{teacher.phone}</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Teacher_profile;