import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';

import { SecCompany } from '../../../utils/types';
import CurrentFund from './CurrentFund';
import FundSelect from './FundSelect';

const Funds = () => {
    const [secCompanies, setSecCompanies] = useState<SecCompany[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL + '/sec-companies';
        axios.get(apiUrl).then(res => setSecCompanies(res.data));
    }, []);

    if (selectedIndex > secCompanies.length) {
        return null;
    }

    return (
        <div style={styles.container}>
            <FundSelect
                funds={secCompanies}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <CurrentFund fund={secCompanies[selectedIndex]} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    } as CSSProperties
};

export default Funds;
