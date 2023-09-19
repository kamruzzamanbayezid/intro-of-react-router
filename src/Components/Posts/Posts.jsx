import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
      const posts = useLoaderData();
      // console.log(posts);
      return (
            <div>
                  <h2>Posts: </h2>
                  <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)'
                  }}>
                        {
                              posts.map(post => <Post key={post.id} post={post}></Post>)
                        }
                  </div>
            </div>
      );
};

export default Posts;