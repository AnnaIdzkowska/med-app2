import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {  mockDataProjects } from "../../data/mockData";
import { useState } from "react";

const ProjectInputComponent = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [project, setProject] = useState(props.project);

	const handleChange = (event) => {
		setProject(event.target.value);
		props.changeProject(event.target.value, props.id);

	};

	return (
		<Box
			height='100%'
			width='80%'
			m='1'
			p='3px'
			display='flex'
			justifyContent='center'
			borderRadius='4px'>
			<InputLabel
				variant='standard'
				htmlFor='uncontrolled-native'></InputLabel>
			<Select
				sx={{ backgroundColor: colors.primary[400], width: "60%" }}
				labelId='demo-select-small'
				id='demo-select-small'
				value={project}
				label='project'
				onChange={(event) => handleChange(event)}>
				{mockDataProjects.map((project) => (
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

export default ProjectInputComponent;
