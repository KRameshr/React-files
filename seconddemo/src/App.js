// import React, { Component } from "react";
// import { Home } from "./classComponet/Home";

// export class App extends Component {
//   obj = { name: "Ramesh", age: 25 };
//   r = "r";
//   ar = ["r", "e"];
//   render() {
//     return (
//       <div className="container">
//         <Home my={this.obj} mya={this.ar} />
//         <p>{this.r}</p>
//         {this.ar.length > 0 ? (
//           <>
//             {" "}
//             <ul>
//               {this.ar.map((val, ind) => (
//                 <li>{val}</li>
//               ))}
//             </ul>
//           </>
//         ) : (
//           <p>not found</p>
//         )}
//         {/* <Home /> */}
//       </div>
//     );
//   }
// }

// export default App

//           ===========================================================================

// import Product from "./fetchApi/Product";
// import React, { Component } from "react";
// import User from "./fetchApi/User";
// import Index from "./boostap/Index";

// export class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <User />
//         {/* <Product/> */}
//         <Index />
//       </div>
//     );
//   }
// }
//props are pass data from parent to child just read only
// export default App

import React from "react";
import Home from "./function/Home";
import About from "./function/About";
import Countre from "./function/Countre";
import Product from "./function/Product";
import Unmount from "./function/Unmount";
import PostApi from "./fetchApi/PostApi";
import Myref from "./function/Myref";
import Mymeno from "./function/Mymeno";
import timer from "./Lifecycle/timer";
import timercontainer from "./Lifecycle/timercontainer";

const App = () => {
  // const obj = {
  //   name: "Ramesh",
  //   age: 23,
  //   Email: "R.com",
  //   address: ["timmaganipalli", "g"],
  // };
  return (
    <main className="container">
      {/* <Countre /> */}
      {/* <Home myobj = {obj}/>
      <hr/>
      <About/>*/}
      {/*
      <Product /> */}
      {/* <Unmount /> */}
      <Myref />
      {/* <Mymeno /> */}

      {/* <timercontainer /> */}
    </main>
  );
};

export default App;

// ===========================================================
// controlled component
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./Controlled component/Home";
// import NavaBar from "./Controlled component/NavaBar";
// // import uncontrolled from "./uncontrolled/UNcontrolled";
// const App = () => {
//   return (
//     <main>
//       <Router>
//         <NavaBar />
//         <section className="container mt-3">
//           <Routes>
//             <Route path="" element={<uncontrolled />} />
//           </Routes>
//         </section>
//       </Router>
//     </main>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import FormiKValidation from "./formik/FormiKValidation";
// import Loc from "./LocalStorage/Loc";
// import NavaBar from "./Controlled component/NavaBar";

// import PostApi from "./fetchApi/PostApi";
// const App = () => {
//   return (
//     <main>
//       {/* <Router>
//         <section className="container p-4">
//           <Routes>
//             <Route path="" element={<Products />} />
//           </Routes>
//         </section>
//       </Router> */}
//       <NavaBar />
//       <section className="container">
//         <PostApi />
//       </section>
//     </main>
//   );
// };

// export default App;
