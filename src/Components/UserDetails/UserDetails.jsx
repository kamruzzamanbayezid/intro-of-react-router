import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
      const userDetails = useLoaderData();

      const { name, website } = userDetails;

      const navigate = useNavigate();
      const handleBack = () => {
            navigate(-1);
      }
      // console.log(userDetails);
      return (
            <div style={{
                  backgroundColor: 'gray',
                  padding: '10px',
                  borderRadius: '10px',
                  color: 'white'
            }}>
                  <h4>The Details if: {name}</h4>
                  <p>Website: {website}</p>
                  <button onClick={handleBack}>Back</button>
            </div>
      );
};

export default UserDetails;