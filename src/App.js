import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import data from "./data/user.json";

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
         </header>
      </div>
   );
}

export default App;
