import "./App.css";
import Search from "../components/Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import layout from "../components/Layout";
import Artist from "./Artist";

const Home = layout(() => {
  return <Search />;
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "artist/:id",
    Component: Artist,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
