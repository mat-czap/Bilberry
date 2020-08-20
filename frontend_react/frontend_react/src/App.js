import React from "react";
import { Provider } from "react-redux";
// import "./App.css";
import MainTemplate from "./template/MainTemplate";
import store from "./store";
import Table from "./components/Table";

function App() {
	return (
		<Provider store={store}>
			<MainTemplate>
				<Table />
			</MainTemplate>
		</Provider>
	);
}

export default App;
