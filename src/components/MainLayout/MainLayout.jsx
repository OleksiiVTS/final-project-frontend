import React from 'react';
import SideBar from '../SideBar/SideBar.jsx';
// import Header from '../Header/Header.jsx';
// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* <h1> MainLayout</h1> */}
      <SideBar />
      {/* <Header /> */}
      {children}
    </div>
    // {isLoading && !error && (
    //     <Circles
    //       height="80"
    //       width="80"
    //       color="#4d78a9"
    //!       wrapperClass={css.loader}
    //     />
    //   )}
  );
};

export default MainLayout;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
