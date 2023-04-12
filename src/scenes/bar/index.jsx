import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/PatientsChart";

const Bar = () => {
	return (
		<Box m='20px'>
			<Header
				title='Ilość pacjentów w projektach'
				subtitle='Wykres słupkowy'
			/>
			<Box height='75vh'>
				<BarChart />
			</Box>
		</Box>
	);
};

export default Bar;
