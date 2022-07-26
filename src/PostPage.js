import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import api from "./api/posts";
import DataContext from "./context/dataContext";
import Nav from "./Nav";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(
    (post) => post.id.toString() === id && !post.hasOwnProperty("idUser")
  );

  const hadleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/home");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <Nav />
      <main className="PostPage">
        <article className="post">
          {post && (
            <>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <Link to={`/edit/${post.id}`}>
                <button className="editButton">Edit Post</button>
              </Link>
              <button
                className="deleteButton"
                onClick={() => hadleDelete(post.id)}
              >
                Delete Post
              </button>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing</p>
              <p>
                <Link to="/">Visit Our Homepage</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </>
  );
};

export default PostPage;
