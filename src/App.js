import UsersTable from "./UsersTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetailsComp from "./UserDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<UsersTable/>} />
          <Route path="/details" element={<UserDetailsComp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
