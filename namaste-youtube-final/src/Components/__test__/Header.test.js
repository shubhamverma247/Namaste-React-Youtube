import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";

test("Should be render logo in Header componnet", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logo = screen.getAllByRole("img");
  expect(logo[0]).toHaveAttribute("src", "ytdarklogo.jpg");
});

test("Should be render search input in Header componnet", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const search = screen.getByRole("textbox");
  expect(search).toBeInTheDocument("Search");
});

test("Should be render list when text searched in search input in Header componnet", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
