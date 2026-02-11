import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Providers;
