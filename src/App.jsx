import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404Page from "./assets/pages/Error404Page";
import HomePage from "./assets/pages/HomePage";
import PostPage from "./assets/pages/PostPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="*" Component={Error404Page} />
          <Route path="/post-page" Component={PostPage} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App