import { prop } from 'lodash/fp';
import React, { CSSProperties } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { HoldingPieData } from '../../../../utils/types';

interface Props {
    data: HoldingPieData[][];
}

const PieCharts = (props: Props) => {
    const { data } = props;

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div style={styles.wrapper}>
            <div style={styles.chartWrapper}>
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
                            bodyFontColor: '#FFFFFF',
                            backgroundColor: '#101010'
                        }
                    }}
                />
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        flex: 1
    } as CSSProperties,
    chartWrapper: {} as CSSProperties
};

export default PieCharts;
