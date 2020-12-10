import { blue } from '@ant-design/colors';
import { prop } from 'lodash/fp';
import React, { CSSProperties } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { numberWithCommas } from '../../../../utils/helpers';
import { PieData } from '../../../../utils/types';

interface Props {
    data: PieData[];
}

const PieChart = (props: Props) => {
    const { data } = props;

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.graphContainer}>
                <div style={styles.graphTitleContainer}>
                    <p style={styles.graphTitle}>
                        Position Distribution by Value in USD
                    </p>
                </div>
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
                    height={460}
                    width={460}
                    options={{
                        aspectRatio: 1,
                        cutoutPercentage: 80,
                        legend: { display: false },
                        tooltips: {
                            callbacks: {
                                label: (item: any) => {
                                    const entry = data[item.index];
                                    return ` ${entry.name}: $${numberWithCommas(
                                        entry.value
                                    )}`;
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
        marginTop: 30,
        paddingBottom: 120
    } as CSSProperties,
    graphContainer: {
        maxWidth: 460,
        position: 'relative'
    } as CSSProperties,
    graphTitleContainer: {
        maxWidth: 240,
        position: 'absolute',
        textAlign: 'center',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    } as CSSProperties,
    graphTitle: {
        margin: 0,
        fontSize: 20
    } as CSSProperties
};

export default PieChart;
