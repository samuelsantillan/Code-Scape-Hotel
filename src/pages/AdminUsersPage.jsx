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
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";

const UserRole = {
  ADMIN: {
    name: "admin",
    value: "0",
  },
  USER: {
    name: "user",
    value: "1",
  },
};

const initialRows = [
  {
    id: randomId(),
    username: "test12",
    email: "test12@test.com",
    password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
    role: UserRole.ADMIN.name,
    state: true,
    createdAt: randomCreatedDate(),
    updatedAt: randomCreatedDate(),
  },
  {
    id: randomId(),
    username: "test12",
    email: "test12@test.com",
    password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
    role: UserRole.ADMIN.name,
    state: true,
    createdAt: randomCreatedDate(),
    updatedAt: randomCreatedDate(),
  },
  {
    id: randomId(),
    username: "test12",
    email: "test12@test.com",
    password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
    role: UserRole.ADMIN.name,
    state: true,
    createdAt: randomCreatedDate(),
    updatedAt: randomCreatedDate(),
  },
  {
    id: randomId(),
    username: "test13",
    email: "test12@test.com",
    password: "$2a$10$fsIhietA0ubG0Q7lkWF6QOiFWk8qvKV99lf45Q34m.aIjo8Jzddly",
    role: UserRole.ADMIN.name,
    state: true,
    createdAt: randomCreatedDate(),
    updatedAt: randomCreatedDate(),
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

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
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function AdminUsersPage() {
  const { getUsersRequest, users } = useAdmin();
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [idElementModified, setIdElementModified] = React.useState(null);
  React.useEffect(() => {
    if (idElementModified) {
      rows.map((row) => {
        if (row.id === idElementModified) {
          console.log(row);
        }
      });
    }
  }, [rows]);

  React.useEffect(() => {
    getUsersRequest();
  }, []);
  console.log(" the console log is ");
  console.log(users);
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
    alert("Implement row save");
    setIdElementModified(id);
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    setIdElementModified(id);
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
    { field: "username", headerName: "username", width: 180, editable: true },
    {
      field: "id",
      headerName : "id",
      editable : false,
      type : "number"
    }
    ,
    {
      field: "email",
      headerName: "email",
      type: "email",
      width: 80,
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
    {
      field: "role",
      headerName: "role",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["admin", "user"],
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
          rows={users}
          getRowId={(users) => users._id}
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
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </>
  );
}
