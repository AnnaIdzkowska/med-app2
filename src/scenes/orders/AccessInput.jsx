import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import DoneOutlined from "@mui/icons-material/DoneOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Header from "../../components/Header";
import { useRef } from "react";
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
