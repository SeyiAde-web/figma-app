import React from 'react';
import { IoIosHome } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBook,
  FaUserGraduate,
  FaMoneyBill,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaBell,
} from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen font-montserrat bg-[#fffaf5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[rgb(242,234,225)] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-m font-bold mb-10 flex items-center gap-2">
            <div className="w-1 h-6 bg-yellow-500 mr-2"></div>
            CRUD OPERATIONS
          </h1>
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="text-md font-semibold">Frontend Developer</h2>
            <p className="text-xs text-yellow-500">Seyi Ade</p>
          </div>


        


          <nav className=" flex flex-col gap-3 text-black">
            <SidebarLink to="/dashboard" icon={<IoIosHome />} label="Home" />
            <SidebarLink to="/dashboard/course" icon={<FaBook />} label="Course" />
            <SidebarLink to="/dashboard/students" icon={<FaUserGraduate />} label="Students" />
            <SidebarLink to="/dashboard/payment" icon={<FaMoneyBill />} label="Payment" />
            <SidebarLink to="/dashboard/report" icon={<FaChartBar />} label="Report" />
            <SidebarLink to="/dashboard/settings" icon={<FaCog />} label="Settings"  />
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center ml-4 gap-3 text-sm text-gray-600 mt-10 hover:text-black transition-colors duration-200"
        >
         Logout <FaSignOutAlt /> 
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div></div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <FaBell className="text-gray-500 hover:text-yellow-500 transition-colors duration-200" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={<FaUserGraduate size={24} className="text-blue-400" />}
            label="Students"
            value="243"
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<FaBook size={24} className="text-pink-400" />}
            label="Course"
            value="13"
            bgColor="bg-pink-50"
          />
          <StatCard
            icon={<FaMoneyBill size={24} className="text-yellow-500" />}
            label="Payments"
            value="INR 556,000"
            bgColor="bg-yellow-50"
          />
          <StatCard
            icon={<FaUser size={24} className="text-white" />}
            label="Users"
            value="3"
            bgColor="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
          />
        </div>
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 py-2 px-4 rounded-md transition-all duration-200 ${
        isActive ? 'bg-yellow-400 text-white' : 'text-black hover:text-'
      }`
    }
  >
    {icon} {label}
  </NavLink>
);

const StatCard = ({ icon, label, value, bgColor }) => (
  <div className={`p-4 rounded-md ${bgColor} shadow-sm hover:shadow-md transition-shadow duration-200`}>
    <div className="mb-2">{icon}</div>
    <p className="text-sm text-gray-600 mb-1">{label}</p>
    <h2 className="text-2xl font-bold">{value}</h2>
  </div>
);

export default Dashboard;
