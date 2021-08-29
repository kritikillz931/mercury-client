import { Sidebar } from "./sidebar/sidebar";
import { Topbar } from "./topbar/Topbar";
import "./Mercury.css"
import { Home } from "./pages/home/Home";


export const Mercury = () => {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

