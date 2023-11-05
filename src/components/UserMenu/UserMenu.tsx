import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../redux/auth/authOperation";

export const UserMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper">
      <Button
        color="primary"
        type="submit"
        variant="contained"
        className="submit-button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};
