import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts, mockDataProjects } from "../../data/mockData";
import DoneOutlined from "@mui/icons-material/DoneOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import RemoveDoneOutlined from "@mui/icons-material/RemoveDoneOutlined";
import Header from "../../components/Header";
import { useRef } from "react";
import { useState } from "react";
import AccessInputComponent from "./AccessInputComponent";
import ProjectInputComponent from "./ProjectInputComponent";

const Connections = () => {

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	

	const columns = [
		// { field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "Imię i Nazwisko",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "project",
			headerName: "Projekty",
			flex: 1,
			renderCell: ({ row: { project, id }}) => {
				// .changeProject(props.project, event.target.value);
				const changeProject = (value, projectId) => {

					// const project = [...mockDataContacts.filter(project => project.id === projectId).map(project => project.id = projectId)]
					// console.log(project);
					// console.log(mockDataContacts);
					// mockDataContacts.project = value;

					const contactTable = mockDataContacts.filter(contact => contact.id === projectId);
					const contactObj = contactTable[0];
					contactObj.project = value;
					
				};
				return (
					<ProjectInputComponent
						projects={mockDataContacts}
						project={project}
						id={id}
						changeProject={changeProject}
					/>
				);
			},
		},

		{
			field: "accessLevel",
			headerName: "Wyrażenie zgody na udział w projekcie",
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<AccessInputComponent access = {access} />
				);
			},
		},
	];

	return (
		<Box m='20px'>
			<Header
				title='PACJENCI - PROJEKTY'
				subtitle='Udział pacjentów w projektach'
			/>
			<Box
				m='40px 0 0 0'
				height='70vh'
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "0.5px solid colors.grey[100]",
					},
					"& .name-column--cell": {
						color: colors.blueAccent[200],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}>
				<DataGrid
					checkboxSelection
					rows={mockDataContacts}
					columns={columns}
				/>
			</Box>
		</Box>
	);
};

export default Connections;
