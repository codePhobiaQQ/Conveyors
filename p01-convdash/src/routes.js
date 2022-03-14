import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import ReportsApp from './pages/ReportsApp';
import VisualApp from 'src/pages/VisualApp';
import ManageSystems from 'src/pages/ManageSystems';
import ManageStatus from 'src/pages/ManageStatus';
import ManageConnConf from 'src/pages/ManageConnConf';
import ManageConvConf from 'src/pages/ManageConvConf';
import ManageScales from 'src/pages/ManageScales';
import ManageConvChain from 'src/pages/ManageConvChain';
import ManageRepair from 'src/pages/ManageRepair';
import User from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" replace /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'reports', element: <ReportsApp /> },
        { path: 'visuals', element: <VisualApp /> },
        { path: 'manage', element: <ManageSystems /> },
        { path: 'manage_status', element: <ManageStatus /> },
        { path: 'manage_config', element: <ManageConnConf /> },
        { path: 'manage_conveyor', element: <ManageConvConf /> },
        { path: 'manage_scales', element: <ManageScales /> },
        { path: 'manage_convchain', element: <ManageConvChain /> },
        { path: 'manage_repair', element: <ManageRepair /> },
        { path: 'user', element: <User /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
