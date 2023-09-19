import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
      // console.log(user);
      const { name, email, phone, id } = user;
      const navigate = useNavigate();

      const userStyle = {
            border: '2px solid red',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
      }

      const handleClick = () => {
            navigate(`/user/${id}`)
      }

      return (
            <div style={userStyle}>
                  <h2>{name}</h2>
                  <h4>{email}</h4>
                  <h4>{phone}</h4>
                  <div>
                        <Link to={`/user/${id}`}>Show Details</Link>
                  </div>
                  <button onClick={handleClick}>Details</button>
            </div>
      );
};

User.propTypes = {
      user: PropTypes.string
};

export default User;