import { Outlet } from "react-router-dom";
import ContentBody from "./ContentBody";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Browse = () => {
  return (
    <div>
      <>
        <Header />
        <div className='main-block'>
          <div className='sidemenu'>
            <SideMenu />
          </div>
          <div className='content-body'>
            <Outlet />
          </div>

        </div>
      </>
    </div>
  )
}

export default Browse;