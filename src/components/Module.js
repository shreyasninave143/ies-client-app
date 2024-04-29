import ModuleOption from "./ModuleOption";
import { useNavigate } from "react-router-dom";

const Module = ({ moduleName, moduleOptions, showOptions, setshowOptionsIndex }) => {

  const navigate = useNavigate();

  // This function handles the click on module names
  const handleModuleClick = (moduleName, moduleOptions) => {
    setshowOptionsIndex(moduleName);
    if (showOptions) {
      setshowOptionsIndex(null);
    }
    if (moduleOptions.length === 0) {
      let arr = moduleName.split(" ");
      if (arr && arr.length > 1) {
        moduleName = arr.join("-");
      } 
      navigate("/browse/" + moduleName.toLowerCase());
    }
  }

  return (
    <div className="module">
      {/* module Name */}

      <div className="moduleName-container" onClick={() => handleModuleClick(moduleName, moduleOptions)}>
        <div className="modulename">{moduleName}</div>
        {moduleOptions.length > 0 && <div className="downarrow">↓</div>}
      </div>



      {/* Module options - Accordian Bottompart */}

      {showOptions && <ModuleOption key={moduleOptions} options={moduleOptions} />}
    </div>
  );
};

export default Module;