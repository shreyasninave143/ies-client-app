import { useState } from "react";
import ModuleOption from "./ModuleOption";


const Module = ({ moduleName, moduleOptions, showOptions, setshowOptionsIndex }) => {

  // const [showModuleOptions, setShowModuleOptions] = useState(false);

  const handleMouseClick = (moduleName) => {
    // console.log(moduleName);
    // setShowModuleOptions(!showModuleOptions);
    setshowOptionsIndex(moduleName);
    if (showOptions) {
      setshowOptionsIndex(null);
    }
  }

  return (
    <div className="module">
      {/* module Name */}

      <div className="moduleName-container" onClick={() => handleMouseClick(moduleName)}>
        <div className="modulename">{moduleName}</div>
        {moduleOptions.length > 0 && <div className="downarrow">↓</div>}
      </div>



      {/* Module options - Accordian Bottompart */}

      {showOptions && <ModuleOption key={moduleOptions} options={moduleOptions} />}
    </div>
  );
};

export default Module;