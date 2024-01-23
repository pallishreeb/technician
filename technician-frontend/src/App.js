/** @format */

import "./App.css";
import Technicians from "./pages/Technicians";
import Apartments from "./pages/Appartments";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuthApi } from "./context/authContext/authProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Events from "./pages/Events";
import AddJob from "./pages/AddJob"
import EditJob from "./pages/EditJob"
import JobDetails from "./pages/Jobdetails";
import {LOGOUT} from "./context/constansts"
import axios from "axios";

function App() {
  const navigate = useNavigate()
  const {dispatch} = useAuthApi()
  axios.interceptors.response.use(
    async function (response) {
      return response;
    },
    async function (error) {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({type:LOGOUT})
        navigate("/")
      }
    },
  );
  const { state } = useAuthApi();
  let admin = state.user
  return (
    <div className="bg-blue">
      {
        admin && <Navbar />
      }


      <ToastContainer limit={1} autoClose={2000} hideProgressBar={true} />
      {
        admin ? <Routes>
          <Route exact path="/" element={<Jobs />} />
          <Route exact path="/add-job" element={<AddJob />} />
          <Route exact path="/edit-job/:id" element={<EditJob />} />
          <Route exact path="/job/:id" element={<JobDetails />} />
          <Route exact path="/technicians" element={<Technicians />} />
          <Route exact path="/apartments" element={<Apartments />} />
          <Route exact path="/events" element={<Events />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> : <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      }

    </div>
  );
}

export default App;
