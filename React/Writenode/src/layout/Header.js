import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../store/userSlice";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

import "./Layout.css";

const Header = () => {
  const user = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const handleGoogle = (e) => {
    if (!user.token) {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const username = result.user.displayName;

          dispatch(
            add({
              token,
              username,
            })
          );
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } else {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          dispatch(remove(user));
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="" alt="" />
        </Link>
        <span>Header</span>
      </div>
      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        {user.token && (
          <NavLink className="link" to="/create" aria-current="page">
            Create
          </NavLink>
        )}
        {user.token ? (
          <button onClick={handleGoogle} className="auth">
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
        ) : (
          <button onClick={handleGoogle} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
