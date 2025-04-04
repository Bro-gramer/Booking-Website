import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './calendar.css'; // 

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className="calendar-container">
                <DesktopDatePicker
                    label="Pick a Date"
                    inputFormat="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default Calendar;
