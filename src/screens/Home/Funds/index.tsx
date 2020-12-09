import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';

import { SecCompany } from '../../../utils/types';

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

    return <div style={styles.container}></div>;
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    } as CSSProperties
};

export default Funds;
