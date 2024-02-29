import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';

function Teacher_edit() {
const Params =useParams(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      dept: "",
      email: "",
      gender: "",
      joiningdate: "",
      phone: "",
      teacherId: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "*Required";
      }
      if (values.name && (values.name.length < 3 || values.name.length > 15)) {
        error.name = "name must be 3 to 15 characters";
      }

      if (!values.dept) {
        error.dept = "*Required";
      }

      if (!values.email) {
        error.email = "*Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Invalid email address";
      }

      if (!values.gender) {
        error.gender = "*Required";
      }

      if (!values.joiningdate) {
        error.joiningdate = "*Required";
      }

      if (!values.phone) {
        error.phone = "*Required";
      } else if (values.phone.toString().length !== 10) {
        error.phone = "Invalid Phone number";
      }

      if (!values.teacherId) {
        error.teacherId = "*Required";
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
        await axios.put(`https://65e0807cd3db23f7624973ab.mockapi.io/teacher/${Params.id}`,
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
        const teacher = await axios.get(`https://65e0807cd3db23f7624973ab.mockapi.io/teacher/${Params.id}`)
        formik.setValues(teacher.data)
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
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.errors.name ? "error-box" : ""
                }${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Department</label>
              <input
                name="department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dept}
                type={"text"}
                className={`form-control ${
                  formik.errors.dept ? "error-box" : ""
                }${
                  formik.touched.dept && !formik.errors.dept
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.errors.dept ? (
                <span style={{ color: "red" }}>{formik.errors.dept}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                }${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
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

          <div className="col-lg-4">
            <div className="form-group">
              <label>Joining Date</label>
              <input
                name="joiningdate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.joiningdate}
                type={"date"}
                className={`form-control ${
                  formik.errors.joiningdate ? "error-box" : ""
                }${
                  formik.touched.joiningdate && !formik.errors.joiningdate ? "success-box" : ""
                }`}
              ></input>
              {formik.touched.joiningdate && formik.errors.joiningdate ? (
                <span style={{ color: "red" }}>{formik.errors.joiningdate}</span>
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


export default Teacher_edit;