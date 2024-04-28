import ContentBody from './ContentBody';
import Header from './Header';
import SideMenu from './SideMenu';

const Body = () => {
  return (
    <>
      <Header />
      <div className='main-block'>
        <div className='sidemenu'>
          <SideMenu />
        </div>
        <div className='content-body'>
          <ContentBody />
        </div>

      </div>
    </>
  );
};

export default Body;