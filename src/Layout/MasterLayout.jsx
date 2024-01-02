import { Outlet } from "react-router-dom";
import MainNavigation from "./sections/MainNavigation";

function MasterLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default MasterLayout;