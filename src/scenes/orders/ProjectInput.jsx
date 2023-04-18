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

const ProjectInput = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [project, setProject] = useState(props.project);

	const handleChange = (event) => {
		setProject(event.target.value);
	};

	return (
		<Box
			// sx={{ minWidth:'150px'  }}
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
				sx={{ backgroundColor: colors.primary[400], width: "80%" }}
				labelId='demo-select-small'
				id='demo-select-small'
				value={project}
				label='project'
				onChange={(event) => handleChange(event)}>
				{props.projects.map((project) => (
					<MenuItem
						key={project.id}
						value={project.name}>
						{project.name}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

export default ProjectInput;
