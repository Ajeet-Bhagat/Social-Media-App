import { useContext } from "react";
import css from "./Posts.module.css";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <br />
        <div className={`card post-car  ${css.Mypost}`}>
          <div className={`card-body `}>
            <h5 className="card-title">
              {post.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePost(post.id)}
              >
                <AiFillDelete />
              </span>
            </h5>
            <img
              src={`/src/IMG/IMG-20221026-WA0004.jpg`}
              className="card-img-top"
              alt={`Post ${post.id}`}
            />
            <h6 className="card-text">Views : {post.views}</h6>
            <p>{post.body}</p>
            {post.tags.map((tag) => (
              <span key={tag} className="badge text-bg-primary hashtag">
                {tag}
              </span>
            ))}
            <div className="alert alert-success reactions" role="alert">
              This post has been reacted by {post.like} people.
            </div>
          </div>
        </div>
    </>
  );
};
export default Posts;
