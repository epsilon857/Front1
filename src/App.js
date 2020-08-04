import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import main from "./main/main";
import main2 from "./main/main2";


function App() {
  return (
      <div>
        <Router>
            <Switch>
                <Route path="/main" component={main}/>
                <Route path="/main2" component={main2}/>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
