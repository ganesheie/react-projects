import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";
import { useState } from "react";
import PostListProvider from "./store/PostListProvider";
function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {SelectedTab === "Home" ? <ListPosts /> : <CreatePost />}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
