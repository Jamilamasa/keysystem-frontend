import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "@/pages/home/Home";

// Define the base path for reusability or potential prefixing
export const ROOT: string = "/";

//Application router
export const router = createBrowserRouter([
  {
    path: ROOT, // Base path
    element: <MainLayout />,
    errorElement: <div>Error Loading Page....</div>, // Fallback UI for routing errors

    children: [
      { index: true, element: <Home /> },
      /* existing routes */
    ],
  },
]);
