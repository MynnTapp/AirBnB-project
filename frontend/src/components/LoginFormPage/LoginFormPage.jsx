// import login from "../../store/session"; //fix import
// import store from "../../store/store"; //fix import
// import * as sessionActions from "../../store/session";
// import { useState } from "react";

// export default function LoginFormPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = (event) => {
//     event.preventDefault();
//     return store.dispatch(
//       sessionActions.login({
//         credential: username,
//         password: password,
//       })
//     );
//   };

//   return (
//     <div>
//       <form>
//         <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <input name="password" value={password} onChange={(g) => setPassword(g.target.value)} />
//         <button type="submit" onClick={onSubmit}></button>
//       </form>
//     </div>
//   );
// }

// // const onSubmit = (event) => {
// //   event.preventDefault();
// //   return store.dispatch(
// //     sessionActions.login({
// //       credential: username,
// //       password: password,
// //     })
// //   );
// // };

// import { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// function LoginFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const [credential, setCredential] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   if (sessionUser) return <Navigate to="/" replace={true} />;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors({});
//     return dispatch(sessionActions.login({ credential, password })).catch(async (res) => {
//       const data = await res.json();
//       if (data?.errors) setErrors(data.errors);
//     });
//   };

//   return (
//     <>
//       <div className="login-container">
//         <h1>Log In</h1>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label>
//             Username or Email
//             <input type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required />
//           </label>
//           <label>
//             Password
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </label>
//           {errors.credential && <p>{errors.credential}</p>}
//           <button type="submit">Log In</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default LoginFormPage;

import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data?.errors) setErrors(data.errors);
    });
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email
          <input type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginFormPage;
