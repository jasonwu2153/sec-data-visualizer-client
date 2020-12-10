import { blue } from '@ant-design/colors';
import React, { CSSProperties } from 'react';

import { PopularHoldingData } from '../../../utils/types';

interface Props {
    data: PopularHoldingData[];
}

const TopHoldingsDetails = (props: Props) => {
    const { data } = props;

    return (
        <div style={styles.wrapper}>
            {data.map((entry: PopularHoldingData, i: number) => (
                <div style={styles.cardContainer} key={i}>
                    <p style={styles.textStyle}>{entry.name}</p>
                    <p style={styles.textStyle}>{entry.title}</p>
                    <p style={styles.textStyle}>LEI: {entry.lei}</p>
                    <p style={styles.textStyle}>
                        Held By {entry.held_by} Funds
                    </p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    wrapper: {
        width: '100%',
        marginBottom: 30
    } as CSSProperties,
    cardContainer: {
        background: blue[4],
        margin: 5
    } as CSSProperties,
    textStyle: {
        margin: 0
    } as CSSProperties
};

export default TopHoldingsDetails;
