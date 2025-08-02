import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../sections/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
export default router;
