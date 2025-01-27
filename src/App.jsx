import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostProvider } from "./assets/contexts/PostContext"; // ✅ Importa il provider, non il context
import Error404Page from "./assets/pages/Error404Page";
import HomePage from "./assets/pages/HomePage";
import PostPage from "./assets/pages/PostPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={Error404Page} />
            <Route path="/post-page" Component={PostPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
