import { blue, grey } from '@ant-design/colors';
import axios from 'axios';
import { prop, propOr } from 'lodash/fp';
import moment from 'moment';
import React, { CSSProperties, useEffect, useState } from 'react';

import { black } from '../../../../utils/colors';
import { HoldingPieData, SecCompany, TopData } from '../../../../utils/types';
import PieCharts from './PieCharts';

interface Props {
    fund: SecCompany;
}

const CurrentFund = (props: Props) => {
    const { fund } = props;
    const [pieData, setPieData] = useState<HoldingPieData[][]>([]);
    const [topNsData, setTopNsData] = useState<TopData[]>([]);
    const [topValData, setTopValData] = useState<TopData[]>([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL + '/holdings-data';
        const cik = prop('cik', fund);
        if (cik) {
            axios.get(apiUrl, { params: { cik } }).then(res => {
                // set pie chart data
                const newPieData = [
                    propOr([], 'data.pie_chart_data', res).map(
                        (entry: HoldingPieData) => ({
                            name: entry.name.toUpperCase(),
                            value: entry.val_usd
                        })
                    ),
                    propOr([], 'data.pie_chart_data', res).map(
                        (entry: HoldingPieData) => ({
                            name: entry.name.toUpperCase(),
                            value: entry.balance
                        })
                    )
                ];
                setPieData(newPieData);

                // set top data
                const newTopNsData = propOr(
                    [],
                    'data.top_five_by_number_shares',
                    res
                );
                setTopNsData(newTopNsData);

                const newTopValData = propOr([], 'data.top_five_by_value', res);
                setTopValData(newTopValData);
            });
        }
    }, [fund]);

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
            <div style={styles.graphsWrapper}>
                <PieCharts data={pieData} />
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        flex: 4,
        marginLeft: 30,
        minWidth: 600,
        overflowY: 'scroll',
        maxHeight: 'calc(100vh - 165px)'
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
    } as CSSProperties,
    graphsWrapper: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    } as CSSProperties
};

export default CurrentFund;
