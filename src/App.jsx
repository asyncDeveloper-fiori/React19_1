import FunctionCall from "./components/FunctionCall";
import StateComponent from "./components/StateComponent";
import { ConditionalRendering } from "./components/ConditionalRendering";
import PropComponent from "./components/PropComponent";
import InputComponent from "./components/InputComponent";
import Users from "./components/Users";
import EffectComponent from "./components/EffectComponet";
import ConditionalStyling from "./components/ConditionalStyling";
import ReferenceComponent from "./components/ReferenceComponent";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import FwdRefComponent from "./components/FwdRefComponent";
import FormStatusComponent from "./components/FormStatusComponet";
import DerivedStateComponent from "./components/DerivedStateComponent";
import { ActionStateComponent } from "./components/ActionStateComponent";
import { CustomHookComponent } from "./components/CustomHookComponent";
import { SubjectContext } from "./components/ContextData";
import SubjectComponent from "./components/SubjectComponent";
import { NavBar } from "./NavBar";
import { Route, Routes } from "react-router";
import ContactPage from "./components/ContactPage";
import DepartmentComponent from "./components/nested/DepartmentComponent";
import StudentComponent from "./components/nested/StudentComponent";
import UserDetailComponent from "./components/UserDetailComponent";
import UserDetails from "./components/UserDetails";
import UserComponent from "./components/APIData/UserComponent";

function App() {
  // var user = 'Sam';
  // const inputRef = useRef(null);

  const [subject, setSubject] = useState("");

  // function fwdRefExecute() {
  //   inputRef.current.focus();
  //   inputRef.current.value = 'sam';
  // }

  return (
    <>
      {/* <FunctionCall />
      <StateComponent />
      <ConditionalRendering />
      <PropComponent user={user} color="red" />
      <InputComponent />
      <Users />
      <EffectComponent />
      <ConditionalStyling />
      <ReferenceComponent />
      <FwdRefComponent ref={inputRef} />
      <Button onClick={fwdRefExecute}>Trigger forward ref</Button> */}
      {/* <FormStatusComponent /> */}
      {/* <DerivedStateComponent /> */}
      {/* <ActionStateComponent /> */}
      {/* <CustomHookComponent /> */}
      {/* <SubjectContext.Provider value={subject}>
        <div className="text-zinc-900 bg-zinc-100 w-[10%]">
          <select
            name=""
            id="select"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option value="">Select a subject</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
          </select>
        </div>

        <SubjectComponent />
      </SubjectContext.Provider> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<h1 className="p-4 text-3xl">Home Page</h1>} />
        <Route
          path="/about"
          element={<h1 className="p-4 text-3xl">About Page</h1>}
        />
        <Route path="/contact" element={<ContactPage />}>
            <Route path="department" element={<DepartmentComponent/>} />
            <Route path="student" element={<StudentComponent/>} />
        </Route>

        <Route path="/userdetail" element={<UserDetailComponent/>} />
        <Route path="/userdetails/:id/:name?" element={<UserDetails />} />

        <Route path="/userData" element={<UserComponent />} />
      </Routes>
    </>
  );
}

export default App;
