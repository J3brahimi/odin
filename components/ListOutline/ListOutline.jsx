import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import moment from "moment";

const ListOutline = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios
      .post("/api/admin/get-outline-by-expire-date", {
        expiredAt: selectedDate,
      })
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, [selectedDate, reload]);

  const handleDelete = (id, outlineId) => {
    axios
      .post("/api/admin/delete-outline", {
        id,
        outlineId,
      })
      .then(() => {
        setReload(!reload);
      });
  };
  return (
    <>
      <Box
        p={4}
        display="flex"
        flexDirection="column"
        gap="8px"
        borderRadius="6px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        textAlign="center"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="تاریخ مورد نظر را انتخاب کنید"
            value={selectedDate}
            onChange={value => setSelectedDate(value)}
          />
        </LocalizationProvider>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">تاریخ شروع</TableCell>
                <TableCell align="center">تاریخ پایان</TableCell>
                <TableCell align="center">وضعیت</TableCell>
                <TableCell align="center">عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p="12px"
                >
                  ...
                </Box>
              ) : (
                users.map(item => (
                  <TableRow
                    key={item?._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {item?.outlineInfo?.id}
                    </TableCell>
                    <TableCell align="center">
                      {moment(item?.createdAt).format("YYYY/MM/DD")}
                    </TableCell>
                    <TableCell align="center">
                      {moment(item?.expiredAt).format("YYYY/MM/DD")}
                    </TableCell>
                    <TableCell align="center">
                      {item.status === "active" ? (
                        <span style={{ color: "#4CAF50" }}>فعال</span>
                      ) : (
                        <span style={{ color: "#F44336" }}>غیر فعال</span>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ background: "#F44336", color: "#FAFAFA" }}
                        onClick={() =>
                          handleDelete(item?._id, item?.outlineInfo?.id)
                        }
                        disabled={item?.status === "inactive"}
                      >
                        حذف
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          {!isLoading && !users.length && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="12px"
              width="100%"
            >
              دیتا موجود نیست
            </Box>
          )}
        </TableContainer>
      </Box>
    </>
  );
};

export default ListOutline;
