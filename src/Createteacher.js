import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Createteacher() {
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
        let teacherData = await axios.post(
          "https://65e0807cd3db23f7624973ab.mockapi.io/teacher",
          values
        );
        console.log(teacherData);
        alert("Data Added Successfully!!");
      } catch (error) {
        alert("Error!! Data not Added");
      }
    },
  });
  return (
    <div class="container-fluid px-4">
      <h1 class="mt-4 mb-4">Teacher - Data Creation Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Teacher Name<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                class={`form-control ${formik.errors.name ? "error-box" : ""} ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
                placeholder="Teacher Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="text"
                class={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Teacher ID<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="teacherId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherId}
                type="text"
                class={`form-control ${
                  formik.touched.email && formik.errors.teacherId
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.teacherId && !formik.errors.teacherId
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
              />
              {formik.touched.teacherId && formik.errors.teacherId ? (
                <span style={{ color: "red" }}>{formik.errors.teacherId}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Joining Date<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="joiningdate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.joiningdate}
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
              />
              {formik.errors.joiningdate ? (
                <span style={{ color: "red" }}>
                  {formik.errors.joiningdate}
                </span>
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
              Department<span style={{ color: "red" }}>*</span>:
            </label>
            <select
              name="dept"
              onChange={formik.handleChange}
              value={formik.values.dept}
              id="inputClass"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>Tamil</option>
              <option>English</option>
              <option>Maths</option>
              <option>Science</option>
              <option>Socialscience</option>
            </select>
            {formik.errors.dept ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone No<span style={{ color: "red" }}>*</span>:
              </label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="number"
                class={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
                id="exampleFormControlInput1"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <button type="submit" class="btn btn-primary mt-1">
              Submit
            </button>
            <Link
              to={"/teachers_data"}
              type="button"
              class="btn btn-secondary ms-2 mt-1"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createteacher;