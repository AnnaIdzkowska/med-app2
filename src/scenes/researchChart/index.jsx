import { Box } from "@mui/material";
import Header from "../../components/Header";
import ResearchChart from "../../components/ResearchChart";

const Pie = () => {
	return (
		<Box m='20px'>
			<Header
				title='Wykres badań'
				subtitle='Wykres kołowy'
			/>
			<Box height='75vh'>
				<ResearchChart />
			</Box>
		</Box>
	);
};

export default Pie;
