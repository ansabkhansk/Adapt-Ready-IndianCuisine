import Header from './Header';
import { Outlet } from 'react-router-dom';

const LayoutWithHeader = () => {
  return (
    <>
      <Header isLoggedIn={true} userName="Ansab Khan" />
      <Outlet />
    </>
  );
};

export default LayoutWithHeader;
