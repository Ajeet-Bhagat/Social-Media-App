import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Headers";
import Footers from "./components/Footers";
import Sidebars from "./components/Sidebars";
import CreatePost from "./components/CreatePost";
import PostLists from "./components/PostLists";
import Posts from "./components/Posts";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import Scroll from "./components/Scroll";

function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="main-cont">
        <Sidebars selectTab={selectTab} setSelectTab={setSelectTab}></Sidebars>
        <div className="sub-cont">
          <Header></Header>
          {selectTab === "Home" ? (
            <PostLists></PostLists>
          ) : (
            // <Posts></Posts>
            <CreatePost></CreatePost>
          )}
          <Scroll></Scroll>
          <Footers></Footers>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
