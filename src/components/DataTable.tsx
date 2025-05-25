import { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  TextField,
  Paper,
} from "@mui/material";
import { useData } from "../Hooks/useData";
// let val = "2";
// Generate large dataset
const generateData = (size) =>
  Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    age: Math.floor(Math.random() * 60) + 18,
  }));

export default function EditableDataTable() {
  const apiResponse = useData();
  useEffect(() => {
    console.log(apiResponse?.data);
  }, [apiResponse?.data, apiResponse?.loading, apiResponse?.error]);
  const [data, setData] = useState(generateData(1000));
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editingRow, setEditingRow] = useState(null);
  // useEffect(() => {
  //   val += 1;
  //   console.log(val);
  // },[val]);

  // Filtering logic
  const filteredData = useMemo(() => {
    return data.filter(
      (row) =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  // Sorting logic
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (order === "asc") return a[orderBy] > b[orderBy] ? 1 : -1;
      return a[orderBy] < b[orderBy] ? 1 : -1;
    });
  }, [filteredData, order, orderBy]);

  // Handle sorting click
  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handle pagination
  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle inline editing
  const handleEdit = (id, field, value) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
    alert("saved " + JSON.stringify(data));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["id", "name", "email", "age"].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : "asc"}
                    onClick={() => handleSort(column)}
                  >
                    {column.toUpperCase()}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <TextField
                      value={row.name}
                      variant="standard"
                      onChange={(e) =>
                        handleEdit(row.id, "name", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.email}
                      variant="standard"
                      onChange={(e) =>
                        handleEdit(row.id, "email", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.age}
                      type="number"
                      variant="standard"
                      onChange={(e) =>
                        handleEdit(row.id, "age", e.target.value)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
