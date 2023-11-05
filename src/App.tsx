import { Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login" component={<MainPage />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
