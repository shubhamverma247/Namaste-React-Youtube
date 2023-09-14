import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Header from "./Components/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
