import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Connections from "./scenes/connections";
import Patients from "./scenes/patients";
import Patients2 from "./scenes/patient";

import Projects from "./scenes/projects";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<Sidebar isSidebar={isSidebar} />
					<main className='content'>
						<Topbar setIsSidebar={setIsSidebar} />
						<Routes>
							<Route
								path='/'
								element={<Dashboard />}
							/>
							<Route
								path='/connections'
								element={<Connections />}
							/>
							<Route
								path='/patients'
								element={<Patients />}
							/>
							
							<Route
								path='/patient'
								element={<Patients2 />}
							/>
							<Route
								path='/projects'
								element={<Projects />}
							/>
							<Route
								path='/bar'
								element={<Bar />}
							/>
							<Route
								path='/line'
								element={<Line />}
							/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
