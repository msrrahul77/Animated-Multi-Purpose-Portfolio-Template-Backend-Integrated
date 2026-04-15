import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import NotFound from "../pages/NotFound";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />
  },
]);
