import React, { useState } from 'react';
import { Container, Grid, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking'

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM-9:00 AM',
        space: '10 Space Available',
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM-11:30 AM',
        space: '10 Space Available',
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 AM-6:30 AM',
        space: '10 Space Available',
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '8:00 AM-9:00 AM',
        space: '10 Space Available',
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '7:00 AM-8:30 AM',
        space: '10 Space Available',
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '8:00 AM-9:00 AM',
        space: '10 Space Available',
    },
]

const AvaiableAppoinment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (

        <Container>
            <Typography variant='h4' sx={{ color: '#5BE0EF', fontWeight: 500, my: 3 }}>Available Appoinment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booking successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvaiableAppoinment;