import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

function MainNavigation() {
  return (
    <>
      <header>
        <nav>
          <Stack direction="row" spacing={2}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
          </Stack>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;