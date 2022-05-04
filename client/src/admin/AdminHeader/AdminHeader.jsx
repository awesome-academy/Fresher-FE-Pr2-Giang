import './styles.scss';
import logo from '../../assets/images/header_logo.png';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div>
        <img src={logo} alt='header-logo'></img>
        <h1>Admin</h1>
      </div>
    </header>
  )
};

export default AdminHeader;
