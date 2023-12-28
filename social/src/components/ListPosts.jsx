import { useContext } from "react";
import ShowPost from "./ShowPost";
import { PostList } from "../store/PostListProvider";
import WelcomeMessage from "./WelcomeMessage";

const ListPosts = () => {
  const { postList, addDummyPost } = useContext(PostList);
  const onGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addDummyPost(data.posts);
      });
  };
  return (
    <>
      {postList.length == 0 && (
        <WelcomeMessage onGetPostsClick={onGetPostsClick} />
      )}
      {postList.map((post) => (
        <ShowPost key={post.id} post={post} />
      ))}
    </>
  );
};
export default ListPosts;
