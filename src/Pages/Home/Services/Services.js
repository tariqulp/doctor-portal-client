import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius delectus culpa totam ut iusto. Neque accusantium odio distinctio obcaecati consequatur, aperiam tempore nesciunt consectetur delectus autem beatae dolor voluptas ut ea tenetur est natus mollitia facilis ad sit labore!',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius delectus culpa totam ut iusto. Neque accusantium odio distinctio obcaecati consequatur, aperiam tempore nesciunt consectetur delectus autem beatae dolor voluptas ut ea tenetur est natus mollitia facilis ad sit labore!',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius delectus culpa totam ut iusto. Neque accusantium odio distinctio obcaecati consequatur, aperiam tempore nesciunt consectetur delectus autem beatae dolor voluptas ut ea tenetur est natus mollitia facilis ad sit labore!',
        img: whitening
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'primary.main', fontWeight: 500, m: 2 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h5" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;