import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App.js";
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import QuestionListPage from './pages/QuestionListPage';
import CoursePage from './pages/CoursePage';
import Login from './component/Login';
import Logout from './component/Logout';
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}/>
          <Route path="courses">
            <Route index element={<CourseListPage />}/>
            <Route path=":courseSlug" element={<CoursePage />}/>
          </Route>
          <Route path="questions">
          <Route index element={<QuestionListPage />}/>
            {/* <Route path={<QuestionListPage />}/> */}
          </Route>
          <Route path='login' element={<Login />}/>
          <Route path='logout' element={<Logout />}/>
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
