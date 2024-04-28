import Module from "./Module.js";
import { MODULES_LIST } from '../utils/constants.js';
import { useState } from "react";

const SideMenu = () => {

  const [showOptionsIndex, setshowOptionsIndex] = useState(1);

  return (
    <div className="sidemenu-component">

      {
        MODULES_LIST.map((module, index) => <Module
          key={module.name}
          moduleName={module.name}
          moduleOptions={module.options}
          showOptions={module.name === showOptionsIndex ? true : false}
          setshowOptionsIndex={setshowOptionsIndex}
        />
        )
      }
    </div>
  );
}

export default SideMenu;