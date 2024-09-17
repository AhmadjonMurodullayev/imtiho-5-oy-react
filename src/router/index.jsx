import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import {Home} from "../pages";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route Index element={<App />}>
      <Route path="/" element={<Home/>}/>

        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  export default Index;