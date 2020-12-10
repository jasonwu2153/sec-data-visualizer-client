import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react';

import { black } from '../../../utils/colors';
import { PopularHoldingData } from '../../../utils/types';
import BarChart from './BarChart';
import TopHoldingsDetails from './TopHoldingsDetails';

const Holdings = () => {
    const [popData, setPopData] = useState<PopularHoldingData[]>([]);

    useEffect(() => {
        const apiUrl =
            process.env.REACT_APP_API_URL + '/popular-legal-entities';
        axios.get(apiUrl).then(res => setPopData(res.data));
    }, []);

    if (!popData || popData.length === 0) {
        return null;
    }

    return (
        <div style={styles.container}>
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>Popular Holdings Across Funds</p>
            </div>
            <BarChart data={popData} />
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>Top 20 Holdings LEI</p>
            </div>
            <TopHoldingsDetails data={popData} />
        </div>
    );
};

const styles = {
    container: {
        padding: 30
    } as CSSProperties,
    headerWrapper: {
        width: '100%',
        paddingBottom: 30
    } as CSSProperties,
    headerText: {
        margin: 0,
        fontColor: black,
        fontWeight: 600,
        fontSize: 20
    } as CSSProperties
};

export default Holdings;
