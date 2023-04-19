import { Box } from "@mui/material";
import Header from "../../components/Header";
import PatientsChart from "../../components/PatientsChart";

const Bar = () => {
	return (
		<Box m='20px'>
			<Header
				title='Ilość pacjentów w projektach'
				subtitle='Wykres słupkowy'
			/>
			<Box height='75vh'>
				<PatientsChart />
			</Box>
		</Box>
	);
};

export default Bar;
