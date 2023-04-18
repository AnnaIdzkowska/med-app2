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
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import RemoveDoneOutlined from "@mui/icons-material/RemoveDoneOutlined";
import Header from "../../components/Header";
import { useRef } from "react";
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
			// sx={{ minWidth:'150px'  }}
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
