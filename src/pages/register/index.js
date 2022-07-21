import React, { useEffect } from "react";
//hooks
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setEmail,
  setLoggedUser,
  setPass,
} from "../../app/userReducer/userSlice";
import { auth, register } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//components
import { Input, Button } from "../../components";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, isLoading] = useAuthState(auth);

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handlePassword = (e) => {
    dispatch(setPass(e.target.value));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    const { uid, accessToken } = user;
    const loggedUser = { uid, accessToken };
    dispatch(setLoggedUser(loggedUser));
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);

  return (
    <div className="bg-movie bg-left bg-no-repeat bg-cover w-full h-screen">
      <div className="wrapper bg-gradient-to-r from-transparent via-black to-black w-full h-screen flex justify-center xl:justify-end">
        <div className="wrapper w-full xl:w-1/2 h-full flex flex-col justify-center items-center">
          <form
            className="flex flex-col gap-12 w-5/6 md:w-fit"
            onSubmit={handleLogin}
          >
            <div className="input flex flex-col gap-5">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                onChange={handleEmail}
                value={email}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <Button type="submit">REGISTER</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
