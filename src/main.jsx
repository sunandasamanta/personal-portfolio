import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Blog from "./pages/Blog.jsx";
import Works from "./pages/Works.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./error-page.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<App />} />
      <Route path="blog" element={<Blog />}>
        <Route path=":slug" element={<Blog />} />
      </Route>
      <Route path="works" element={<Works />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="*" element={<div>Not found!</div>} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
