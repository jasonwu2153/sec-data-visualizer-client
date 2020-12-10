import { prop } from 'lodash/fp';
import React, { CSSProperties } from 'react';
import { Bar } from 'react-chartjs-2';

import { PopularHoldingData } from '../../../utils/types';

interface Props {
    data: PopularHoldingData[];
}

const BarChart = (props: Props) => {
    const { data } = props;

    return (
        <div style={styles.wrapper}>
            <Bar
                data={{
                    datasets: [{ data: data.map(prop('held_by')) }],
                    labels: data.map(prop('name'))
                }}
                options={{
                    aspectRatio: 1,
                    cutoutPercentage: 80,
                    legend: { display: false },
                    tooltips: {
                        callbacks: {
                            label: (item: any) => {
                                const entry = data[item.index];
                                return ` Held by ${entry.held_by} SEC funds.`;
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

const styles = {
    wrapper: {
        width: '100%'
    } as CSSProperties
};

export default BarChart;
