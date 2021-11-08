import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvaiableAppoinment from '../AvaiableAppoinment/AvaiableAppoinment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <AppoinmentHeader date={date} setDate={setDate} />
            <AvaiableAppoinment date={date} />
        </div>
    );
};

export default Appoinment;