import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.css";
import Dashboard from "./Dashboard";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Createstudent from "./Createstudent";
import Createteacher from "./Createteacher";
import Students from "./Students";
import Student_Edit from "./Student_Edit";
import Student_profile from "./Student_profile";
import Teacher from "./Teacher";
import Teacher_edit from "./Teacher_edit";
import Teacher_profile from "./Teacher_profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper"> 
      
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students_data" element={<Students />} />
          <Route path="students_create" element={<Createstudent />} />
          <Route path="students_profile/:id" element={<Student_profile />} />
          <Route path="students_edit/:id" element={<Student_Edit />} />
          <Route path="teachers_data" element={<Teacher />} />
          <Route path="teachers_create" element={<Createteacher />} />
          <Route path="teachers_profile/:id" element={<Teacher_profile />} />
          <Route path="teachers_edit/:id" element={<Teacher_edit />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;