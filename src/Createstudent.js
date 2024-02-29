import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Createstudent() {
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
        let studentdata = await axios.post(
          "https://65e0807cd3db23f7624973ab.mockapi.io/students",
          values
        );
        console.log(studentdata);
        alert("Student Data Added Successfully !!");
      } catch (error) {
        alert("Error, Please Check it!!");
      }
    },
  });
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4 mb-4">Student Creation Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="formGroupExampleStudent" class="form-label">
                Student Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="studentName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                class={`form-control ${
                  formik.errors.studentName ? "error-box" : ""
                } ${
                  formik.touched.studentName && !formik.errors.studentName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleStudent"
                placeholder="Student Name"
              />
              {formik.errors.studentName ? (
                <span style={{ color: "red" }}>
                  {formik.errors.studentName}
                </span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="formGroupExampleFather" class="form-label">
                Father Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="fatherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                class={`form-control ${
                  formik.errors.fatherName ? "error-box" : ""
                } ${
                  formik.touched.fatherName && !formik.errors.fatherName
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleFather"
                placeholder="Father Name"
              />
              {formik.errors.fatherName ? (
                <span style={{ color: "red" }}>{formik.errors.fatherName}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExampleAdmission" class="form-label">
                Admission No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="admissionNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.admissionNo}
                class={`form-control ${
                  formik.errors.admissionNo ? "error-box" : ""
                } ${
                  formik.touched.admissionNo && !formik.errors.admissionNo
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExampleAdmission"
              />
              {formik.errors.admissionNo ? (
                <span style={{ color: "red" }}>
                  {formik.errors.admissionNo}
                </span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExampleDOB" class="form-label">
                DOB<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="date"
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                class="form-control"
                id="formGroupExampleDOB"
              />
              {formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Gender<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              id="inputState"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.errors.gender ? (
              <span style={{ color: "red" }}>{formik.errors.gender}</span>
            ) : null}
          </div>
          <div class="col-md-4">
            <label for="inputClass" class="form-label">
              Class<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              id="inputClass"
              name="class"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.class}
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>10A</option>
              <option>10B</option>
              <option>10C</option>
              <option>12A</option>
              <option>12B</option>
              <option>12C</option>
            </select>
            {formik.errors.class ? (
              <span style={{ color: "red" }}>{formik.errors.class}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="formGroupExamplePhone" class="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="number"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                class={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
                id="formGroupExamplePhone"
              />
              {formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <Link
              to={"/students_data"}
              type="button"
              class="btn btn-secondary ms-2"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createstudent;