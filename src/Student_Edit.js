import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';

function Student_edit() {
const Params =useParams(true);

  const formik = useFormik({
    initialValues: {
      studentName: "",
      admissionNo: "",
      class: "",
      dob: "",
      fatherName: "",
      gender: "",
      phone: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.studentName) {
        error.studentName = "*Required";
      } else if (
        values.studentName.length < 3 ||
        values.studentName.length > 15
      ) {
        error.studentName = "Character must between 3 to 15";
      }

      if (!values.admissionNo) {
        error.admissionNo = "*Required";
      } else if (
        values.admissionNo.toString().length < 4 ||
        values.admissionNo.toString().length > 5
      ) {
        error.admissionNo = "Number must be 4 or 5 digits";
      }

      if (!values.class) {
        error.class = "*Required";
      }

      if (!values.dob) {
        error.dob = "*Required";
      }

      if (!values.fatherName) {
        error.fatherName = "*Required";
      } else if (
        values.fatherName.length < 3 ||
        values.fatherName.length > 15
      ) {
        error.fatherName = "Character must between 3 to 15";
      }

      if (!values.gender) {
        error.gender = "*Required";
      }

      if (!values.phone) {
        error.phone = "*Required";
      } else if (values.phone.toString().length !== 10) {
        error.phone = "Invalid Mobile No.";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`https://65e0807cd3db23f7624973ab.mockapi.io/students/${Params.id}`,
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });

  useEffect(() => {
    let fetchData = async () =>{
      try{
        const student = await axios.get(`https://65e0807cd3db23f7624973ab.mockapi.io/students/${Params.id}`)
        formik.setValues(student.data)
      }
      catch (error){
        alert("Error")
      }
    }
    fetchData()
    
   
  },[])
  

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input
                name="studentName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                type={"text"}
                className={`form-control ${
                  formik.errors.studentName ? "error-box" : ""
                }${
                  formik.touched.studentName && !formik.errors.studentName
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.errors.studentName ? (
                <span style={{ color: "red" }}>{formik.errors.studentName}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Father Name</label>
              <input
                name="fatherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                type={"text"}
                className={`form-control ${
                  formik.errors.fatherName ? "error-box" : ""
                }${
                  formik.touched.fatherName && !formik.errors.fatherName
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.errors.fatherName ? (
                <span style={{ color: "red" }}>{formik.errors.fatherName}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                }${
                  formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                }`}
              ></input>
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Admission No</label>
              <input
                name="admissionNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.admissionNo}
                type={"number"}
                className={`form-control ${
                  formik.errors.admissionNo ? "error-box" : ""
                }${
                  formik.touched.admissionNo && !formik.errors.admissionNo
                    ? "success-box"
                    : ""
                }`}
              ></input>
              {formik.touched.admissionNo && formik.errors.admissionNo ? (
                <span style={{ color: "red" }}>{formik.errors.admissionNo}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Class</label>
              <select
                name="class"
                onChange={formik.handleChange}
                value={formik.values.class}
                className={`form-control`}
              >
              <option selected>Choose...</option>
              <option>10A</option>
              <option>10B</option>
              <option>10C</option>
              <option>12A</option>
              <option>12B</option>
              <option>12C</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>---</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                }${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              ></input>
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


export default Student_edit;