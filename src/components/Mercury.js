import { Sidebar } from "./sidebar/sidebar";
import { Topbar } from "./topbar/Topbar";
import "./Mercury.css"


export const Mercury = () => {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

