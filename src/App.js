import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Body from "./Body";

import { Button, Divider } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Logo">
          <h1>BusiHub</h1>
          <h4>The Cloud-based Business Management Solution</h4>
        </div>
        <div className="Login">
          <Button primary compact>
            Login
          </Button>
        </div>
      </header>
      <div className="Body-Container">
        <Divider />
        <Body />
      </div>
      <footer>
        <Divider />
        <h3>Made by Wesley Chan</h3>
      </footer>
    </div>
  );
}

export default App;
