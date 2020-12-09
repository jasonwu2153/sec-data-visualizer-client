import { blue, grey } from '@ant-design/colors';
import moment from 'moment';
import React, { CSSProperties, useState } from 'react';

import { black } from '../../../../utils/colors';
import { SecCompany } from '../../../../utils/types';

interface Props {
    fund: SecCompany;
}

const CurrentFund = (props: Props) => {
    const { fund } = props;

    const [holdings, setHoldings] = useState([]);

    if (!fund) {
        return null;
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>{fund.name.toUpperCase()}</p>
                <p style={styles.headerDescText}>
                    CIK: {fund.cik} | The data visualization below illustrates
                    recent positions acquired by the fund. Data was acquired by
                    scraping the latest NPORT-P filings on{' '}
                    <a href="https://www.sec.gov/">sec.gov.</a>
                </p>
                <p style={styles.timestampText}>
                    Filing Scraped on{' '}
                    {moment(fund.created_at).format('MMM DD YYYY')}.
                </p>
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
        color: black,
        fontWeight: 600,
        fontSize: 25
    } as CSSProperties,
    headerDescText: {
        paddingTop: 10,
        color: grey[5],
        maxWidth: 600
    } as CSSProperties,
    timestampText: {
        color: blue.primary
    } as CSSProperties
};

export default CurrentFund;
