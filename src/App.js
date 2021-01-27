//! React dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Components
import Landing from "./component/dynamic/Landing";
import Favourites from "./component/dynamic/Favourites";
import About from "./component/dynamic/About";
import Popular from "./component/dynamic/popular/Popular";
import Single from "./component/dynamic/Single";
import TopRated from "./component/dynamic/top-rated/TopRated";
import Upcoming from "./component/dynamic/upcoming/Upcoming";
import NowPlaying from "./component/dynamic/now-playing/NowPlaying";
import Credits from "./component/static/Credits";
import NoPage from "./component/static/NoPage";

function App() {
   return (
      <Router basename={"/butter-db"}>
         <React.Fragment>
            {/* All contents of the app will render inside the wrapper */}
            <Switch>
               {/* Home */}
               <Route path="/" exact component={Landing} />
               {/* Main Pages */}
               <Route path="/popular" component={Popular} />
               <Route path="/top-rated" component={TopRated} />
               <Route path="/upcoming" component={Upcoming} />
               <Route path="/now-playing" component={NowPlaying} />
               <Route path="/favourites" component={Favourites} />
               <Route path="/about" component={About} />
               <Route path="/info/:id" component={Single} />
               <Route path="/credits" component={Credits} />
               <Route path="*" component={NoPage} />
            </Switch>
         </React.Fragment>
      </Router>
   );
}

export default App;
