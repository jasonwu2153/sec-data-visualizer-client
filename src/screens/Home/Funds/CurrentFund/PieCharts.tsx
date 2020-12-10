import { blue } from '@ant-design/colors';
import { prop } from 'lodash/fp';
import React, { CSSProperties } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { numberWithCommas } from '../../../../utils/helpers';
import { PieData } from '../../../../utils/types';

interface Props {
    data: PieData[];
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
                <div style={styles.graphContainer}>
                    <Doughnut
                        data={{
                            datasets: [
                                {
                                    data: data.map(prop('value')),
                                    backgroundColor: data.map((_, i: number) =>
                                        i < 9 ? blue[9 - i] : blue[1]
                                    )
                                }
                            ],
                            labels: data.map(prop('name'))
                        }}
                        height={600}
                        width={600}
                        options={{
                            aspectRatio: 1,
                            cutoutPercentage: 80,
                            legend: { display: false },
                            tooltips: {
                                callbacks: {
                                    label: (item: any) => {
                                        const entry = data[item.index];
                                        return ` ${
                                            entry.name
                                        }: $${numberWithCommas(entry.value)}`;
                                    }
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 120
    } as CSSProperties,
    chartWrapper: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 60
    } as CSSProperties,
    labelWrapper: {
        marginRight: 60,
        maxWidth: 200
    } as CSSProperties,
    label: {
        fontSize: 22
    } as CSSProperties,
    graphContainer: {
        maxWidth: 600
    } as CSSProperties
};

export default PieCharts;
