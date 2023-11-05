import { useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../../redux/auth/authSelectors";

const MainPage = () => {
  const userdate = useAppSelector(selectUser);
  return (
    <div>
      <h2>Welcome to the main page</h2>
      <p>{userdate.email}</p>
      <p>{userdate._id}</p>
    </div>
  );
};
export default MainPage;
