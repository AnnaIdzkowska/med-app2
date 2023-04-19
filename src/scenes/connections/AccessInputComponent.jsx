import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";

const AccessInputComponent = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [access, setAccess] = useState(props.access);

	const handleChange = (event) => {
		access === "tak" ? setAccess("nie") : setAccess("tak");
	};
	return (
		<Box
			height='80%'
			width='30%'
			m='1'
			p='5px'
			display='flex'
			justifyContent='center'
			backgroundColor={
				access === "tak"
					? colors.greenAccent[600]
					: access === "nie"
					? colors.redAccent[700]
					: colors.grey[300]
			}
			borderRadius='4px'>
			<InputLabel
				variant='standard'
				htmlFor='uncontrolled-native'></InputLabel>
			<Select
				labelId='demo-select-small'
				id='demo-select-small'
				value={access}
				label='access'
				onChange={(event) => handleChange(event)}>
				<MenuItem value={"tak"}>Tak</MenuItem>
				<MenuItem value={"nie"}>Nie</MenuItem>
			</Select>
		</Box>
	);
};

export default AccessInputComponent;
