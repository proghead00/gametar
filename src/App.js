import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Route path={["/games/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
