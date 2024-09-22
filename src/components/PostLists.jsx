import { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSprinner from "./LoadingSpinner";

const PostLists = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      // controller.abort();
    };
    
  }, []);
  return (
    <>
    <div className={`Main d-flex flex-row mb-3`}>
      {fetching && <LoadingSprinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Posts key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostLists;
