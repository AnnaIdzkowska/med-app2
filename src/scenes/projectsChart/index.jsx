import { Box } from "@mui/material";
import Header from "../../components/Header";
import ProjectsChart from "../../components/ProjectsChart";

const Bar = () => {
	return (
		<Box m='20px'>
			<Header
				title='Ilość projektów w danym roku'
				subtitle='Wykres słupkowy'
			/>
			<Box height='75vh'>
				<ProjectsChart />
			</Box>
		</Box>
	);
};

export default Bar;
