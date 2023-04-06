import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar, useGridApiRef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";

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
		{ field: "id", headerName: "ID", flex: 0.5 },
		{ field: "registrarId", headerName: "Numer rejestracyjny", flex: 0.5 },
		{
			field: "name",
			headerName: "Imię i Nazwisko",
			flex: 1,
			cellClassName: "name-column--cell",
			editable: false,
		},
		{
			field: "age",
			headerName: "Wiek",
			type: "number",
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "phone",
			headerName: "Numer telefonu",
			flex: 1,
			editable: true,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
			editable: true,
		},
		{
			field: "address",
			headerName: "Adres",
			flex: 1,
			editable: true,
		},
		{
			field: "city",
			headerName: "Miasto",
			flex: 1,
			editable: true,
		},
		{
			field: "zipCode",
			headerName: "Kod pocztowy",
			flex: 0.5,
			editable: true,
		},
		{
			field: "icon",
			headerName: "Actions",
			flex: 1,
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

	const [patients, setPatients] = useState(mockDataContacts);
	const [columns, setColumns] = useState(defaultColumns);
	const gridRef = React.useRef(null);
	const getRowId = (row) => row.id;

	return (
		<Box m='20px'>
			<Header
				title='DANE ADRESOWE'
				subtitle='Tabela z podstawowymi danymi pacjentów'
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
						color: colors.greenAccent[300],
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
					components={{ Toolbar: GridToolbar }}
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
