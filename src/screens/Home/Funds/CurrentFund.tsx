import React, { CSSProperties } from 'react';

import { black } from '../../../utils/colors';
import { SecCompany } from '../../../utils/types';

interface Props {
    fund: SecCompany;
}

const CurrentFund = (props: Props) => {
    const { fund } = props;

    return (
        <div style={styles.wrapper}>
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>{fund.name.toUpperCase()}</p>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        flex: 4,
        marginLeft: 30,
        minWidth: 600
    } as CSSProperties,
    headerWrapper: {
        width: '100%',
        paddingBottom: 20
    } as CSSProperties,
    headerText: {
        margin: 0,
        fontColor: black,
        fontWeight: 600,
        fontSize: 25
    } as CSSProperties
};

export default CurrentFund;
