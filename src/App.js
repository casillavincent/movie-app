//! React dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Components
import Landing from "./component/dynamic/Landing";
import Header from "./component/static/Header";
import Favourites from "./component/dynamic/Favourites";
import About from "./component/dynamic/About";

function App() {
   return (
      <Router>
         <React.Fragment>
            {/* All contents of the app will render inside the wrapper */}
            <div className="wrapper">
               <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/favourites" component={Favourites} />
                  <Route path="/about" component={About} />
               </Switch>
            </div>
         </React.Fragment>
         <Header />
      </Router>
   );
}

export default App;
