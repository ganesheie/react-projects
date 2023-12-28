import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addDummyPost: () => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_DATA
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addDummyPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addDummyPost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_DATA = [
  /* {
    id: "1",
    title: "React Course",
    body: "Learing React to update my chance of getting good jobs. It should be fine.",
    reactions: 1,
    tags: ["UpdateSkills", "React", "Employment"],
    userId: "1",
  },
  {
    id: "2",
    title: "Merry Christmas",
    body: "Merry Christmas and Happy New year to all of you.",
    reactions: 14,
    tags: ["Christmas", "Festival"],
    userId: "1",
  }, */
];

export default PostListProvider;
