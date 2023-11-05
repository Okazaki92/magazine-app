import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="header">
      {isLoggedIn ? <UserMenu /> : <Navigation />}
    </header>
  );
};
