import React from "react";
import "./App.css";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import data from "./data/user.json";
import statistics from "./data/statistics.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = data;

  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
        <Statistics title="UPLOAD STATS" stats={statistics} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
