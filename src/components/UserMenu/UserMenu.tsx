import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout } from "../../redux/auth/authOperation";
import { selectUser } from "../../redux/auth/authSelectors";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUser);

  return (
    <div className="wrapper">
      <Button
        color="primary"
        type="submit"
        variant="contained"
        className="submit-button"
        onClick={() => dispatch(logout(userData._id))}
      >
        Logout
      </Button>
    </div>
  );
};
