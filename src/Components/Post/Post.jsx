import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {

      const { id, title } = post;
      const navigate = useNavigate();

      const postStyle = {
            border: '2px solid red',
            borderRadius: '10px',
            // padding: '5px',
            margin: '5px'
      }

      const handlePost = () => {
            navigate(`/post/${id}`)
      }

      return (
            <div style={postStyle}>
                  <h2>{title.slice(0, 10).toUpperCase()}</h2>
                  {/* <p>{body}</p> */}
                  <Link onClick={handlePost} to={`/post/${id}`}>Show Details</Link>
                  <br></br>
                  <Link to={`/post/${id}`}>
                        <button style={{ border: '1px dotted red' }}>Details</button>
                  </Link>

            </div>
      );
};

Post.propTypes = {
      post: PropTypes.object
}

export default Post;