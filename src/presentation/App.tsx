import Index from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
