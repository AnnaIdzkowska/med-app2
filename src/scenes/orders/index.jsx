import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, useGridApiRef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataOrders, mockDataProjects, mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import AccessInput from "./AccessInput";
import ProjectInput from "./ProjectInput";
import PatientInput from "./PatientInput";

const Patients = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const apiRef = useGridApiRef();

	const deletePatient = (id) => {
		const result = patients.filter((patient) => patient.id !== id);
		setPatients(result);
	};
	const editPatient = (event, id) => {
		apiRef.current.startRowEditMode({ id });
	};

	const defaultColumns = [
		// { field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "Nazwa zlecenia",
			flex: 0.5,
			cellClassName: "name-column--cell",
			editable: false,
		},
		{
			field: "date",
			headerName: "Data zlecenia",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "patient",
			headerName: "Pacjenci",
			flex: 1,
			renderCell: ({ row: { patient } }) => {
				return (
					<PatientInput
						patients={mockDataContacts}
						patient={patient}
					/>
				);
			},
		},
		{
			field: "project",
			headerName: "Projekty",
			flex: 1,
			renderCell: ({ row: { project } }) => {
				return (
					<ProjectInput
						projects={mockDataProjects}
						project={project}
					/>
				);
			},
		},
		{
			field: "morfologiaKrwiPełna",
			headerName: "Leukocyty",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { morfologiaKrwiPełna } }) => {
				return <AccessInput value={morfologiaKrwiPełna} />;
			},
		},
		{
			field: "erytrocyty",
			headerName: "Erytrocyty",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { OB } }) => {
				return <AccessInput value={OB} />;
			},
		},
		{
			field: "hemoglobina",
			headerName: "Hemoglobina",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { CRP } }) => {
				return <AccessInput value={CRP} />;
			},
		},
		{
			field: "hematokryt",
			headerName: "Hematokryt",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { glukoza } }) => {
				return <AccessInput value={glukoza} />;
			},
		},
		{
			field: "mch",
			headerName: "MCH",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { kreatynina } }) => {
				return <AccessInput value={kreatynina} />;
			},
		},
		{
			field: "mchc",
			headerName: "MCHC",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { homocysteina } }) => {
				return <AccessInput value={homocysteina} />;
			},
		},
		{
			field: "płytkiKrwi",
			headerName: "Płytki krwi",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			renderCell: ({ row: { TSH } }) => {
				return <AccessInput value={TSH} />;
			},
		},
		{
			field: "icon",
			headerName: "Actions",
			flex: 0.8,
			sortable: false,
			filterable: false,
			renderCell: (event, params) => (
				<>
					<Button>
						<EditIcon
							style={{ color: colors.grey[100] }}
							sx={{
								margin: "25px",
							}}
							onClick={() => {
								editPatient(event, event.row.id);
							}}
						/>
					</Button>
					<Button>
						<DeleteIcon
							style={{ color: colors.grey[100] }}
							sx={{
								margin: "25px",
							}}
							onClick={() => {
								deletePatient(event.row.id);
							}}
						/>
					</Button>
				</>
			),
		},
	];

	const [patients, setPatients] = useState(mockDataOrders);
	const [columns, setColumns] = useState(defaultColumns);
	const gridRef = React.useRef(null);
	const getRowId = (row) => row.id;

	return (
		<Box m='20px'>
			<Header
				title='ZLECENIA BADAŃ'
				subtitle='W ramach danego projektu'
			/>
			<Box
				m='40px 0 0 0'
				height='75vh'
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
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
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: `${colors.grey[100]} !important`,
					},
				}}>
				<DataGrid
					rows={patients}
					columns={defaultColumns}
					//  components={{ Toolbar: GridToolbar }}
					ref={gridRef}
					editMode='row'
					getRowId={getRowId}
					apiRef={apiRef}
				/>
			</Box>
		</Box>
	);
};

export default Patients;
