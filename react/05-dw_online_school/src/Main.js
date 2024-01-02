import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import QuestionListPage from './pages/QuestionListPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}/>
          <Route path="courses">
            <Route index element={<CourseListPage />}/>
            {/* <Route path={<CourseListPage />}/> */}
          </Route>
          <Route path="questions">
          <Route index element={<QuestionListPage />}/>
            {/* <Route path={<QuestionListPage />}/> */}
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
