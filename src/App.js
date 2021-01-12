//! React dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//! Components
import Landing from "./component/dynamic/Landing";
import Header from "./component/static/Header";
import Favourites from "./component/dynamic/Favourites";
import About from "./component/dynamic/About";
import Footer from "./component/static/Footer";
import Popular from "./component/dynamic/popular/Popular";

function App() {
   return (
      <Router>
         <React.Fragment>
            <Header />

            {/* All contents of the app will render inside the wrapper */}
            <div className="wrapper">
               <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/popular" component={Popular} />
                  <Route path="/favourites" component={Favourites} />
                  <Route path="/about" component={About} />
               </Switch>
            </div>
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;
