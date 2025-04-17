import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SimpleLayout from "../layouts/simpleLayout/simpleLayout";
import InformationPage from '../containers/InformationPage/InformationPage';
// import DoctorDashboard from '../Pages/Doctor/Dashboard/DoctorDashboard';
import AboutUs from '../containers/AboutUs/AboutUs';
import OurService from '../containers/OurService/ourService';
import OurGoal from "../containers/OurGoal/ourGoal"
import DoctorDetails from "../containers/DoctorsDetails/DoctorsDetails"
import Help from "../containers/Help/Help"
import ServiceDeatiles from "../Pages/ServiceDetailPage/ServiceDetail"





export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <SimpleLayout />, // Wrap main routes with SimpleLayout
      children: [
        { path: '', element: <InformationPage /> },
        { path: '/FAQ', element: <AboutUs /> },
        { path: '/our_Service', element: <OurService/> },
        { path: '/Our_Goal', element: <OurGoal/> },
        { path: '/Our_executives', element: <DoctorDetails/> },
        { path: '/_Help', element: <Help/> },
        { path: '/service-detail', element: <ServiceDeatiles/> },
      ],
    },
      
        
  
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
