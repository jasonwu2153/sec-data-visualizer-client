import { blue } from '@ant-design/colors';
import React, { CSSProperties } from 'react';

import { white } from '../../../../utils/colors';
import { numberWithCommas } from '../../../../utils/helpers';
import { TopData } from '../../../../utils/types';

interface Props {
    value_data: TopData[];
    balance_data: TopData[];
}

const TopFive = (props: Props) => {
    const { value_data, balance_data } = props;
    return (
        <div style={styles.wrapper}>
            <div style={styles.column}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionHeaderText}>Most Value</p>
                </div>
                <div style={styles.entriesWrapper}>
                    {value_data.map((entry: TopData, i: number) => (
                        <div style={styles.entryContainer} key={i}>
                            <p style={styles.entryName}>{entry.name}</p>
                            <p style={styles.entryText}>
                                Value: ${numberWithCommas(entry.val_usd)}
                            </p>
                            <p style={styles.entryText}>LEI: {entry.lei}</p>
                            <p style={styles.entryText}>
                                ISIN: {entry.isin ? entry.isin : 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    ...styles.column,
                    marginLeft: 30
                }}
            >
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionHeaderText}>Most Shares</p>
                </div>
                <div style={styles.entriesWrapper}>
                    {balance_data.map((entry: TopData, i: number) => (
                        <div style={styles.entryContainer} key={i}>
                            <p style={styles.entryName}>{entry.name}</p>
                            <p style={styles.entryText}>
                                Shares: {numberWithCommas(entry.balance)}
                            </p>
                            <p style={styles.entryText}>LEI: {entry.lei}</p>
                            <p style={styles.entryText}>
                                ISIN: {entry.isin ? entry.isin : 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        display: 'flex',
        paddingBottom: 120,
        marginLeft: 60
    } as CSSProperties,
    column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    } as CSSProperties,
    sectionHeader: {
        width: '100%'
    } as CSSProperties,
    sectionHeaderText: {
        fontSize: 20
    } as CSSProperties,
    entriesWrapper: {
        width: '100%'
    } as CSSProperties,
    entryContainer: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        background: blue[5]
    } as CSSProperties,
    entryName: {
        color: white,
        fontWeight: 500,
        margin: 0
    } as CSSProperties,
    entryText: {
        color: white,
        margin: 0
    } as CSSProperties
};

export default TopFive;
