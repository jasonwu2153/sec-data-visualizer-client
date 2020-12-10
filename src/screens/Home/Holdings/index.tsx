import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { PopularHoldingData } from '../../../utils/types';

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

    return <></>;
};

export default Holdings;
