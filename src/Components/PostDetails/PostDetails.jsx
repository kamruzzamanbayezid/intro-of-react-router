import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
      const postDetails = useLoaderData();
      const navigate = useNavigate();

      const handlePostBack = ()=> {
            navigate(-1);
      }
      // console.log(postDetails);
      return (
            <div style={{border: '2px dotted yellow',padding: '10px', color: 'red'}}>
                  <h2>Details About: {postDetails.title}</h2>
                  <p>{postDetails.body}</p>
                  <button onClick={handlePostBack}>Back</button>
            </div>
      );
};

export default PostDetails;