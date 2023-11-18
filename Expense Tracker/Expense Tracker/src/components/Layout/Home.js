// import React, { useState } from "react";
// // import AuthContext from "../../store/AuthContext";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import "./Home.css";

// const Home = () => {
//   // const authCtx = useContext(AuthContext);
//   // console.log(authCtx)

//   const [open, setOpen] = useState(false);

//   function linkClickHandler() {
//     setOpen((prevState) => !prevState);
//   }
//   return (
//     <div>
//       <Nav className={!open ? "navbar" : "changeNavbar"}>
//         <h1>
//           {!open
//             ? "Welcome to Expense Tracker!!!"
//             : "Winners never quite, Quitters never win."}
//         </h1>
//         {!open ? (
//           <p>
//             Your profile is incomplete.
//             <NavLink to="/profile"
//               onClick={linkClickHandler}
//               style={{ textDecoration: "none" }}
//             >
//               Complete now
//             </NavLink>
//           </p>
//         ) : (
//           <p>
//             Your profile is 64% completed. A Complete Profile has Higher chances of
//             landing job.
//             <NavLink to="/home"
//               onClick={linkClickHandler}
//               style={{ textDecoration: "none" }}
//             >
//               Complete now
//             </NavLink>
//           </p>
//         )}
//       </Nav>
//     </div>
//   );
// };

// export default Home;


import React, { useContext, useState } from "react";
import AuthContext from "../../store/AuthContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx)

  const [open, setOpen] = useState(false);

  const linkClickHandler = () => {
    setOpen((prevState) => !prevState);
  };

  const renderProfileMessage = () => {
    return (
      <p>
        Your profile is {open ? "64% completed. A Complete Profile has higher chances of landing a job." : "incomplete."}
        <NavLink
          to={open ? "/home" : "/profile"}
          onClick={linkClickHandler}
          style={{ textDecoration: "none" }}
        >
          Complete now
        </NavLink>
      </p>
    );
    // if (!open) {
    //   return (
    //     <p>
    //       Your profile is incomplete.
    //       <NavLink
    //         to="/profile"
    //         onClick={linkClickHandler}
    //         style={{ textDecoration: "none" }}
    //       >
    //         Complete now
    //       </NavLink>
    //     </p>              
    //   );
    // } else {
    //   return (
    //     <p>
    //       Your profile is 64% completed. A Complete Profile has higher chances
    //       of landing a job.
    //       <NavLink
    //         to="/home"
    //         onClick={linkClickHandler}
    //         style={{ textDecoration: "none" }}
    //       >
    //         Complete now
    //       </NavLink>
    //     </p>
    //   );
    // }
  };

  return (
    <div>
      <Nav className={!open ? "navbar" : "changeNavbar"}>
        <h1>
          {!open
            ? "Welcome to Expense Tracker!!!"
            : "Winners never quit, Quitters never win."}
        </h1>
        {renderProfileMessage()}
      </Nav>
    </div>
  );
};

export default Home;