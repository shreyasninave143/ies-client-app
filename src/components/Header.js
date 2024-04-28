import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <h1>Integrated Eligiblity System</h1>
      </div>
      <div className="header-right">
        <input placeholder="search dashboard" />
        <button>Search</button>
      </div>

    </div>
  )
}

export default Header;