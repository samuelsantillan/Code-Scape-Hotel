import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useAdmin } from "../context/AdminContext";
import Swal from 'sweetalert2'
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import '../assets/css/admin-page.css';

function EditToolbar(props) {
  const { setRows, setRowModesModel, setCreateUserState } = props;

  const handleClick = () => {
    setCreateUserState(true);
    const _id = randomId();
    setRows((oldRows) => {
      return [
        ...oldRows,
        {
          _id,
          username: "",
          email: "",
          password: "",
          role: 0,
          state: true,
          isNew: true,
        },
      ];
    });

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [_id]: { mode: GridRowModes.Edit, fieldToFocus: "username" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button className="btn btnAdminUs" startIcon={<AddIcon />} onClick={handleClick}>
        Agregar Usuario
      </Button>
    </GridToolbarContainer>
  );
}

export default function AdminUsersPage() {
  const {
    getUsersRequest,
    users,
    deleteUserRequest,
    updateUserRequest,
    createUserRequest,
  } = useAdmin();
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    getUsersRequest();
  }, []);

  React.useEffect(() => {
    setRows(users); 
  }, [users]);

  const [createUserState, setCreateUserState] = React.useState(false);

  const [rowModesModel, setRowModesModel] = React.useState({});
  const [idElementModified, setIdElementModified] = React.useState(null);
  React.useEffect(() => {
    if (idElementModified) {
      console.log(idElementModified);
    }
  }, [idElementModified]); 

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    Swal.fire({
      title: `Se guardó correctamente el elemento con ID: ${id}!`,
      icon: "success",
      color: '#faf8f4',
      background: '#1d130c'
    })
    setIdElementModified(id);
  };

  const handleDeleteClick = (id) => () => {
    Swal.fire({
      title: `Seguro que quieres eliminar el usuario con ID:${id} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      color: '#faf8f4',
      background: '#1d130c',
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          text: `Se eliminó correctamente el elemento con ID: ${id}!`,
          icon: 'success',
          color: '#faf8f4',
          background: '#1d130c'
        })
      }
    })
    setIdElementModified(id);
    deleteUserRequest(id);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    if (createUserState) {
      setCreateUserState(false);
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
      createUserRequest(newRow);
      return updatedRow;
    } else {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
      updateUserRequest(idElementModified, newRow);
      return updatedRow;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "username",
     headerName: "Usuario",
      editable: true,
      headerAlign: "center",
      flex: 1
    },
    {
      field: "email",
      headerName: "Correo",
      type: "email",
      align: "left",
      flex: 1,
      headerAlign: "center",
      editable: true,
    },
    {
      field: "role",
      headerName: "Rol",
      editable: true,
      headerAlign: "center",
      type: "number",
      align: "center",
      flex: 1
    },
    {
      field: "state",
      headerName: "Estado",
      editable: true,
      headerAlign: "center",
      type: "boolean",
      align: "center",
      flex: 1
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      headerAlign: "center",
      flex: 1,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancelar"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Eliminar"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid className="data-grid-container"
          rows={rows}
          getRowId={(rows) => rows._id}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel, setCreateUserState },
          }}
        />
      </Box>
    </>
  );
}
