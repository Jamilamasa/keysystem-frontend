import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Define the base path for reusability or potential prefixing
const ROOT: string = "/";

//Application router
export const router = createBrowserRouter([
  {
    path: ROOT,                      // Base path (e.g., "/")
    element: <MainLayout />,        
    errorElement: <div>Error Loading Page....</div>, // Fallback UI for routing errors
    children: [
      {
        index: true,                 // This is the default route under "/"
        element: <h1 className="">Home</h1>,     
      },
    ],
  },
]);
