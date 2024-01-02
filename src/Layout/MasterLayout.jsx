import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function MasterLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default MasterLayout;