import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import VideoCard from "../VideoCard";
import { MockData } from "../../utils/constants";

test("Should be render VideoCard componnet", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <VideoCard video={MockData[0].video} />
      </Provider>
    </BrowserRouter>
  );
  const name = screen.getByText("we are trending");
  expect(name).toBeInTheDocument();
});
