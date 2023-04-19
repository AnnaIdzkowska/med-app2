import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CheckIcon from "@mui/icons-material/Check";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useState } from "react";

const ValueInput = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [value, setValue] = useState(props.value);

	const handleChange = (event) => {
		value === "yes" ? setValue("no") : setValue("yes");
	};


	return (
		<Box
			height='80%'
			width='100%'
			m='0'
			p='5px'
			display='flex'
			justifyContent='center'>
			<InputLabel
				variant='standard'
				htmlFor='uncontrolled-native'></InputLabel>
			<Select
				labelId='demo-select-small'
				id='demo-select-small'
				value={value}
				label='value'
				onChange={(event) => handleChange(event)}>
				<MenuItem value={"yes"}>
					<CheckIcon />
				</MenuItem>
				<MenuItem value={"no"}>
					<ClearOutlinedIcon />
				</MenuItem>
			</Select>
		</Box>
	);
};

export default ValueInput;
