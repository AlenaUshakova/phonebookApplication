import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div style={{display: 'flex'}}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
