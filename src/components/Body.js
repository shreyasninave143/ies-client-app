import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import Signup from './Signup';
import CreateAccount from './admin/CreateAccount';
import ViewAccounts from './admin/ViewAccounts';
import CreatePlan from './admin/CreatePlan';
import ViewPlans from './admin/ViewPlans';
import CreateApplication from './application-registration/CreateApplication';
import ViewApplication from './application-registration/ViewApplication';
import PlanSelection from './data-collection/PlanSelection';
import IncomeDetails from './data-collection/IncomeDetails';
import EducationDetails from './data-collection/EducationDetails';
import KidsDetails from './data-collection/KidsDetails';
import SummaryScreen from './data-collection/SummaryScreen';
import DetermineEligibility from './eligibility-determination/DetermineEligibility';
import Correspondence from './correspondence/Correspondence';
import HistoryNotices from './correspondence/HistoryNotices';
import PendingNotices from './correspondence/PendingNotices';
import Dashboard from './dashboard/Dashboard';
import Reports from './reports/Reports';
import BenefitIssuance from './benefit-issuance/BenefitIssuance';
import ChangePassword from './ChangePassword';


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/change-password",
      element: <ChangePassword />
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />
        },
        {
          path: "reports",
          element: <Reports />
        },
        {
          path: "benefit-issuance",
          element: <BenefitIssuance />
        },
        {
          path: "admin/create-account",
          element: <CreateAccount />,
        },
        {
          path: "admin/view-accounts",
          element: <ViewAccounts />,
        },
        {
          path: "admin/create-plan",
          element: <CreatePlan />
        },
        {
          path: "admin/view-plans",
          element: <ViewPlans />
        },

        // Application Registration Routes
        {
          path: "application-registration/create-application",
          element: <CreateApplication />
        },
        {
          path: "application-registration/view-application",
          element: <ViewApplication />
        },

        // Data Collection Routes
        {
          path: "data-collection/plan-selection",
          element: <PlanSelection />
        },
        {
          path: "data-collection/income-details",
          element: <IncomeDetails />
        },
        {
          path: "data-collection/education-details",
          element: <EducationDetails />
        },
        {
          path: "data-collection/kids-details",
          element: <KidsDetails />
        },
        {
          path: "data-collection/summary-screen",
          element: <SummaryScreen />
        },
        {
          path: "eligibility-determination/determine-eligibility",
          element: <DetermineEligibility />
        },
        {
          path: "correspondence",
          element: <Correspondence />
        },
        {
          path: "correspondence/pending-notices",
          element: <PendingNotices />
        },
        {
          path: "correspondence/history-notices",
          element: <HistoryNotices />
        },

      ],
    },
    {
      path: "/signup",
      element: <Signup />
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;