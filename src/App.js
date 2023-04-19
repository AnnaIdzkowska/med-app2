import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Connections from "./scenes/connections";
import Patient from "./scenes/patient";
import Orders from "./scenes/orders"
import Projects from "./scenes/projects";
import PatientsChart from "./scenes/patientsChart";
import ProjectsChart from "./scenes/projectsChart";
import ResearchPieChart from "./scenes/researchChart";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Results from "./scenes/results";


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
								path='/patient'
								element={<Patient />}
							/>
							<Route
								path='/projects'
								element={<Projects />}
							/>
							<Route
								path='/patientsChart'
								element={<PatientsChart />}
							/>
							<Route
								path='/projectsChart'
								element={<ProjectsChart />}
							/>
							<Route
								path='/researchChart'
								element={<ResearchPieChart />}
							/>
							<Route
								path='/orders'
								element={<Orders />}
							/>
							<Route
								path='/results'
								element={<Results />}
							/>
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
