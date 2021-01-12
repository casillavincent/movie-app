//! React dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Components
import Landing from "./component/dynamic/Landing";
import Favourites from "./component/dynamic/Favourites";
import About from "./component/dynamic/About";
import Popular from "./component/dynamic/popular/Popular";

function App() {
   return (
      <Router>
         <React.Fragment>
            {/* All contents of the app will render inside the wrapper */}
            <Switch>
               <Route path="/" exact component={Landing} />
               <Route path="/popular" component={Popular} />
               <Route path="/favourites" component={Favourites} />
               <Route path="/about" component={About} />
            </Switch>
         </React.Fragment>
      </Router>
   );
}

export default App;
