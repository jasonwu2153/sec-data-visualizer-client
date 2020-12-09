import React, { CSSProperties, Dispatch } from 'react';

import { black, lightGray } from '../../../utils/colors';
import { SecCompany } from '../../../utils/types';

interface Props {
    funds: SecCompany[];
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

const FundSelect = (props: Props) => {
    const { funds, selectedIndex, setSelectedIndex } = props;
    return (
        <div style={styles.wrapper}>
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>Explore By Company</p>
            </div>
            {funds.map((fund: SecCompany) => (
                <div style={styles.fundWrapper}>
                    <p style={styles.fundName}>{fund.name.toUpperCase()}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    wrapper: {
        width: 300,
        maxHeight: 600,
        overflowY: 'scroll'
    } as CSSProperties,
    headerWrapper: {
        width: '100%',
        paddingBottom: 20
    } as CSSProperties,
    headerText: {
        margin: 0,
        fontColor: black,
        fontWeight: 600,
        fontSize: 18
    } as CSSProperties,
    fundWrapper: {
        background: lightGray,
        borderRadius: 10,
        padding: '20px 30px 20px 30px',
        marginBottom: 10,
        width: '100%'
    } as CSSProperties,
    fundName: {
        margin: 0,
        fontColor: black,
        fontWeight: 600
    } as CSSProperties
};

export default FundSelect;
