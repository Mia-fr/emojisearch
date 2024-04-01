import { useState } from "react";
import "./App.css";
import emojiList from "./assets/emojiList.json";

import Search from "./components/Search";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");

  const tab = [];

  for (let i = 0; i < emojiList.length; i++) {
    const showEmoji = emojiList[i];

    if (showEmoji.keywords.includes(search)) {
      if (tab.length < 20) {
        tab.push((showEmoji = { showEmoji }));
      } else {
        break;
      }
    }
  }
  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      <Footer />;
    </div>
  );
};

export default App;
