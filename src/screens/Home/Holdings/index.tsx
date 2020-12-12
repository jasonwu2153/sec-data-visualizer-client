import './styles.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
        <div className="page-container">
            <br />
            <div className="h1">Popular Holdings Across Funds</div>
            <BarChart data={popData} />
            <hr />
            <br />
            <TopHoldingsDetails data={popData} />
        </div>
    );
};

export default Holdings;
