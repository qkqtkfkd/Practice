import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<HomePage />}></Route> */}
          {/* <Route path="course">
            <Route path="python~~~"></Route>
          </Route>
          <Route path="questions">
            <Route path=":questionId"></Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
