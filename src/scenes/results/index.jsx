
    import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { mockDataContacts, mockDataResults } from "../../data/mockData";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
	GridRowModes,
	DataGrid,
	GridToolbarContainer,
	GridActionsCellItem,
} from "@mui/x-data-grid";
import {
	randomCreatedDate,
	randomTraderName,
	randomUpdatedDate,
	randomId,
} from "@mui/x-data-grid-generator";
import Header from "../../components/Header";

function EditToolbar(props) {
	const { setRows, setRowModesModel } = props;
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const handleClick = () => {
		const id = randomId();
		setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
		}));
	};

	return (
		<GridToolbarContainer>
			<Header
				title='WYNIKI BADAŃ'
				subtitle='Dla poszczególnych zleceń'
			/>
			<Button
				style={{ color: colors.grey[100], margin: "150px -220px 0" }}
				startIcon={<AddIcon />}
				onClick={handleClick}>
				Dodaj kolejne badanie
			</Button>
		</GridToolbarContainer>
	);
}

EditToolbar.propTypes = {
	setRowModesModel: PropTypes.func.isRequired,
	setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid() {
	const [rows, setRows] = React.useState(mockDataResults);
	const [rowModesModel, setRowModesModel] = React.useState({});
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleRowEditStart = (params, event) => {
		event.defaultMuiPrevented = true;
	};

	const handleRowEditStop = (params, event) => {
		event.defaultMuiPrevented = true;
	};

	const handleEditClick = (id) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
	};

	const handleSaveClick = (id) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
	};

	const handleDeleteClick = (id) => () => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const handleCancelClick = (id) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});

		const editedRow = rows.find((row) => row.id === id);
		if (editedRow.isNew) {
			setRows(rows.filter((row) => row.id !== id));
		}
	};

	const processRowUpdate = (newRow) => {
		const updatedRow = { ...newRow, isNew: false };
		setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
		return updatedRow;
	};

	const handleRowModesModelChange = (newRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	const columns = [
		//  { field: "id", headerName: "ID", flex: 0.5 },
		// { field: "id", headerName: "ID" },
		{
			field: "test",
			headerName: "Badanie",
			flex: 0.5,
			cellClassName: "name-column--cell",
			editable: true,
		},
		{
			field: "result",
			headerName: "Wynik",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "unit",
			headerName: "Jedn.",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "min",
			headerName: "MIN",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "max",
			headerName: "MAX",
			flex: 0.5,
			headerAlign: "left",
			align: "left",
			editable: true,
		},
		{
			field: "actions",
			type: "actions",
			headerName: "Operacja",
			flex: 1,
			cellClassName: "actions",
			getActions: ({ id }) => {
				const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							icon={<SaveIcon />}
							label='Save'
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem
							icon={<CancelIcon />}
							label='Cancel'
							className='textPrimary'
							onClick={handleCancelClick(id)}
							color='inherit'
						/>,
					];
				}

				return [
					<GridActionsCellItem
						icon={<EditIcon />}
						label='Edit'
						className='textPrimary'
						onClick={handleEditClick(id)}
						color='inherit'
					/>,
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label='Delete'
						onClick={handleDeleteClick(id)}
						color='inherit'
					/>,
				];
			},
		},
	];

	return (
		<Box
			m='20px'
			height='80vh'
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
					backgroundColor: colors.blueAccent[800],
					borderBottom: "none",
				},
				"& .MuiDataGrid-virtualScroller": {
					backgroundColor: colors.primary[400],
				},
				"& .MuiDataGrid-footerContainer": {
					borderTop: "none",
					backgroundColor: colors.blueAccent[800],
				},
				"& .MuiCheckbox-root": {
					color: `${colors.greenAccent[200]} !important`,
				},
				"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
					color: `${colors.grey[100]} !important`,
				},
				"& .MuiDataGrid-root .MuiDataGrid-virtualScrollerContent--overflowed .MuiDataGrid-row--lastVisible .MuiDataGrid-cell":
					{
						backgroundColor: colors.primary[400],
					},
			}}>
			<DataGrid
				rows={rows}
				columns={columns}
				editMode='row'
				rowModesModel={rowModesModel}
				onRowModesModelChange={handleRowModesModelChange}
				onRowEditStart={handleRowEditStart}
				onRowEditStop={handleRowEditStop}
				processRowUpdate={processRowUpdate}
				slots={{
					toolbar: EditToolbar,
				}}
				slotProps={{
					toolbar: { setRows, setRowModesModel },
				}}
			/>
		</Box>
	);
}
