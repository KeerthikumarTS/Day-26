import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Student_profile() {
  const params = useParams()
  const [student, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const student = await axios.get(`https://65e0807cd3db23f7624973ab.mockapi.io/students/${params.id}`)
      setStudent(student.data)
      setLoading(false)
      
    }
    catch (error){
      alert("Error")
    }
  }

  return (
    <div className="container-fluid">
      
      <div className="row p-5">
        <h1>Id:{student.id}</h1> <hr/>
        <div className="col-6">
           <h5>Name:{student.studentName}</h5> 
        </div>
        <div className="col-6">
        <h5>Admission No:{student.admissionNo}</h5> 
        </div>
        <div className="col-6">
        <h5>Class:{student.class}</h5> 
        </div>
        <div className="col-6">
        <h5>DOB:{student.dob}</h5> 
        </div>
        <div className="col-6">
        <h5>Father Name:{student.fatherName}</h5> 
        </div>
        <div className="col-6">
        <h5>Gender:{student.gender}</h5>
        </div>
        <div className="col-6">
        <h5>Phone:{student.phone}</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Student_profile;