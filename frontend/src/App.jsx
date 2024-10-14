// import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage/LoginFormPage";

// console.log(RouterProvider);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <homePage />,
//     //loader: rootLoader,
//     children: [
//       {
//         path: "/login",
//         element: <LoginFormPage />,
//         //loader: eventLoader,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div>
//       <h1> Hello from App </h1>
//       <LoginFormPage />
//     </div>
//   );
// }

// export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Welcome!</h1>,
//   },
//   {
//     path: "/login",
//     element: <LoginFormPage />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
// import * as sessionActions from "./store/session";

// export function Layout() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => {
//       setIsLoaded(true);
//     });
//   }, [dispatch]);

//   return <>{isLoaded && <Outlet />}</>;
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <h1>Welcome!</h1>,
//       },
//       {
//         path: "/login",
//         element: <LoginFormPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation";
// import * as sessionActions from "./store/session";

// function Layout() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => {
//       setIsLoaded(true);
//     });
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && <Outlet />}
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <h1>Welcome!</h1>,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import Navigation from "./components/Navigation/Navigation";
import * as sessionActions from "./store/session";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
