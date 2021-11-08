import React from 'react';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [BookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography sx={{ color: '#5BE0EF', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: '#5BE0EF' }}>BOOK APPOINMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                BookingOpen={BookingOpen}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;