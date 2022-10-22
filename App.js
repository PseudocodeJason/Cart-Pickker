import { Provider } from "react-redux";
import store from "./redux/store";
import CartApp from "./CartApp";

export default function App() {
  return (
    <Provider store={store}>
      <CartApp/>
    </Provider>
  );
}