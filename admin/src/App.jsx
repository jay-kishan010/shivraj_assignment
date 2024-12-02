import Navbar from "./components/Navbar";
import Add_Image from "./pages/Add_Image";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)

  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
        
          <Route path="/" element={<Login/>} />
         
          <Route path="/register" element={<Register/>} />
          {authUser ? (
                    <>
                       
          <Route path="/add-members" element={<Member/>} />
                        <Route path="/add-images" element={<Add_Image />} />
                       
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/"  />} />
                )}

        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App;
