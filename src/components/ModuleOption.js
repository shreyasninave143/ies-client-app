import { Link } from "react-router-dom";

const ModuleOption = ({ options }) => {



  return (
    <div className="module-options">
      {
        options.map((option, index) => {
          let link = null;
          // This switch case is for creating links based on options
          // TODO : integrate/optimize code - add links to contants.js file
          switch (option) {
            case "Create Account":
              link = "admin/create-account";
              break;
            case "View Accounts":
              link = "admin/view-accounts";
              break;
            case "Create Plan":
              link = "admin/create-plan";
              break;
            case "View Plans":
              link = "admin/view-plans";
              break;
            case "Correspondence":
              link = "correspondence";
              break;
            case "Create Application":
              link = "application-registration/create-application";
              break;
            case "View Application":
              link = "application-registration/view-application";
              break;
            case "Education Details":
              link = "data-collection/education-details";
              break;
            case "Kids Details":
              link = "data-collection/kids-details";
              break;
            case "Summary Screen":
              link = "data-collection/summary-screen";
              break;
            case "History Notices":
              link = "correspondence/history-notices";
              break;
            case "Determine Eligibility":
              link = "eligibility-determination/determine-eligibility";
              break;
            case "Plan Selection":
              link = "data-collection/plan-selection";
              break;
            case "Income Details":
              link = "data-collection/income-details";
              break;
            case "Pending Notices":
              link = "correspondence/pending-notices";
              break;
            default:
              break;
          }
          return (
            <Link to={link}><p key={option}>{option}</p></Link>
          )
        }
        )
      }
    </div>
  )
};

export default ModuleOption;