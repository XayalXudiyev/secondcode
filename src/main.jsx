import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { routes } from "./routes/index.jsx";

const root = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={root} />
	</Provider>,
);
