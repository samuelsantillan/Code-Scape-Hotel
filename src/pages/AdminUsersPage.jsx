import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useAdmin } from "../context/AdminContext";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

// const UserRole = {
//   ADMIN: {
//     name: "admin",
//     value: "0",
//   },
//   USER: {
//     name: "user",
//     value: "1",
//   },
// };

// const initialRows = [
//   {
//     _id: randomId(),
//     username: "test12",
//     email: "test12@test.com",
//     password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
//     role: UserRole.ADMIN.name,
//     state: true,
//     createdAt: randomCreatedDate(),
//     updatedAt: randomCreatedDate(),
//   },
//   {
//     _id: randomId(),
//     username: "test12",
//     email: "test12@test.com",
//     password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
//     role: UserRole.ADMIN.name,
//     state: true,
//     createdAt: randomCreatedDate(),
//     updatedAt: randomCreatedDate(),
//   },
//   {
//     _id: randomId(),
//     username: "test12",
//     email: "test12@test.com",
//     password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
//     role: UserRole.ADMIN.name,
//     state: true,
//     createdAt: randomCreatedDate(),
//     updatedAt: randomCreatedDate(),
//   },
//   {
//     _id: randomId(),
//     username: "test13",
//     email: "test12@test.com",
//     password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
//     role: UserRole.ADMIN.name,
//     state: true,
//     createdAt: randomCreatedDate(),
//     updatedAt: randomCreatedDate(),
//   },
// ];

function EditToolbar(props) {
  const { setRows, setRowModesModel, setCreateUserState } = props;

  const handleClick = () => {
    setCreateUserState(true);
    const _id = randomId();
    setRows((oldRows) => {
      console.log(oldRows);
      console.log([
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
      ]);
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
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
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
    setRows(users); // Actualizar el estado de rows cuando los datos de users cambian
  }, [users]);

  const [createUserState, setCreateUserState] = React.useState(false);

  console.log(rows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [idElementModified, setIdElementModified] = React.useState(null);
  React.useEffect(() => {
    if (idElementModified) {
      console.log(idElementModified);
    }
  }, [idElementModified]); // Envuelve idElementModified en un array

  // console.log(users);
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    alert("se clickeo");
    console.log(id);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    alert("Implement row save");
    setIdElementModified(id);
  };

  const handleDeleteClick = (id) => () => {
    console.log(rows);
    // setRows(rows.filter((row) => row.id !== id));
    setIdElementModified(id);
    deleteUserRequest(id);
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row._id === id);
    console.log(rows);
    console.log(rowModesModel);
    console.log(editedRow);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row._id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    console.log(newRow);
    if (createUserState) {
      setCreateUserState(false);
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
      console.log(updatedRow);
      console.log(idElementModified);
      console.log("processRowUpdate");
      console.log(newRow);
      createUserRequest(newRow);
      return updatedRow;
    } else {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));
      console.log(updatedRow);
      console.log(idElementModified);
      console.log("processRowUpdate");
      console.log(newRow);
      updateUserRequest(idElementModified, newRow);
      return updatedRow;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "username", headerName: "username", width: 180, editable: true },
    {
      field: "email",
      headerName: "email",
      type: "email",
      width: 220,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "password",
      headerName: "password",
      width: 220,
      editable: true,
    },
    // {
    //   field: "role",
    //   headerName: "role",
    //   width: 220,
    //   editable: true,
    //   type: "singleSelect",
    //   valueOptions: ["1", "0"],
    // },
    {
      field: "role",
      headerName: "role",
      width: 220,
      editable: true,
      type: "number",
    },
    {
      field: "state",
      headerName: "state",
      width: 220,
      editable: true,
      type: "boolean",
    },
    // {
    //   field: "createdAt",
    //   headerName: "createdAt",
    //   type: "date",
    //   width: 180,
    //   editable: true,
    // },
    // {
    //   field: "updatedAt",
    //   headerName: "updatedAt",
    //   type: "date",
    //   width: 180,
    //   editable: true,
    // },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
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
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
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
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
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
