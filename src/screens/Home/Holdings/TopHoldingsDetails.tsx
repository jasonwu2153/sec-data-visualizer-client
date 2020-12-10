import React, { CSSProperties } from 'react';

import { PopularHoldingData } from '../../../utils/types';

interface Props {
    data: PopularHoldingData[];
}

const TopHoldingsDetails = (props: Props) => {
    return <div style={styles.wrapper}></div>;
};

const styles = {
    wrapper: {
        width: '100%',
        marginBottom: 30
    } as CSSProperties
};

export default TopHoldingsDetails;
