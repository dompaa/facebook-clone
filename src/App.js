import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();

  //we don't need basic stuff once we provided the reducer: const user = null;
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          // if there is no user, then render the login page, otherwise render out the rest of the app
          <>
            {/* Header */}
            <Header />  {/* App body inside */}
            <div className="app__body">
              <Sidebar />
              {/* Sidebar  - done*/}
              <Feed />
              {/* Feed - done*/}
              {/* Widgets - done*/}
              <Widgets />
            </div>  {/* App body above*/}
          </>
        )}
      {/* if there is no user then render the login page */}
    </div>
  );
}

export default App;
