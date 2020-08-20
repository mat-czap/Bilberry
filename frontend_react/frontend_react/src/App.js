import React from "react";
import "./App.css";
import MainTemplate from "./components/MainTemplate";
import { Provider } from "react-redux";
import store from "./store";
import Table from './components/Table'

function App() {
	return (
		<Provider store={store}>
			<MainTemplate >
				<Table/>
			</MainTemplate>
		</Provider>
	);
}

export default App;
