import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {

  const [sidebarToggle, setSidebarToggle] = React.useState(1);

  return (
    <>
      <div className="">
        <div className={`  ${sidebarToggle?`block`:`hidden`}  `}>
          <Sidebar />
        </div>
        <span onClick={()=>{setSidebarToggle(!sidebarToggle)}} className={`${sidebarToggle?`md:ml-60`:`md:ml-9`} z-50 w-9 rounded-full hover:bg-slate-100 h-7 mt-7 text-center items-center flex justify-center hover:cursor-pointer bg-white absolute `}>
        <i className="fas fa-thin fa-sort rotate-90 text-2xl "></i>
        </span>
      </div>
      <div className={`relative ${sidebarToggle?`md:ml-64`:`md:ml-0`} md:ml-64 bg-blueGray-100 `}>
        <AdminNavbar sidebarToggle = {sidebarToggle} />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
