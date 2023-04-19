import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";

const PatientInput = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [patient, setPatient] = useState(props.patient);

	const handleChange = (event) => {
		setPatient(event.target.value);
	};

	return (
		<Box
			height='100%'
			width='100%'
			m='1'
			p='3px'
			display='flex'
			justifyContent='center'
			borderRadius='4px'>
			<InputLabel
				variant='standard'
				htmlFor='uncontrolled-native'></InputLabel>
			<Select
				sx={{ backgroundColor: colors.primary[400], width: "100%" }}
				labelId='demo-select-small'
				id='demo-select-small'
				value={patient}
				label='patient'
				onChange={(event) => handleChange(event)}>
				{props.patients.map((patient) => (
					<MenuItem
						key={patient.id}
						value={patient.name}>
						{patient.name}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

export default PatientInput;
