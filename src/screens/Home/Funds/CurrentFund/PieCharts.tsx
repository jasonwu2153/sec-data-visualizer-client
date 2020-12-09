import { prop } from 'lodash/fp';
import React, { CSSProperties } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { PieData } from '../../../../utils/types';

interface Props {
    data: PieData[][];
}

const PieCharts = (props: Props) => {
    const { data } = props;

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.chartWrapper}>
                <div style={styles.labelWrapper}>
                    <p style={styles.label}>
                        Position Distribution by Value in USD
                    </p>
                </div>
                <Doughnut
                    data={{
                        datasets: [{ data: data[0].map(prop('value')) }],
                        labels: data[0].map(prop('name'))
                    }}
                    height={600}
                    width={600}
                    options={{
                        cutoutPercentage: 80,
                        legend: { display: false },
                        tooltips: {
                            callbacks: {
                                label: (item: any) => {
                                    const entry = data[0][item.index];
                                    return ` ${entry.name}: $${entry.value}`;
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        flex: 1,
        paddingBottom: 120
    } as CSSProperties,
    chartWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    } as CSSProperties,
    labelWrapper: {
        marginRight: 60,
        maxWidth: 200
    } as CSSProperties,
    label: {
        fontSize: 22
    } as CSSProperties
};

export default PieCharts;
