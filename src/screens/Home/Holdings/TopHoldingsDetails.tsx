import './styles.css';

import React, { CSSProperties } from 'react';

import { PopularHoldingData } from '../../../utils/types';

interface Props {
    data: PopularHoldingData[];
}

const TopHoldingsDetails = (props: Props) => {
    const { data } = props;

    return (
        <div className="wrapper">
            <div className="h1">Top 20 Holdings LEI</div>
            <table className="table">
                <tr className="row">
                    <th>Holdings</th>
                    <th>Company</th>
                    <th>Name</th>
                    <th>LEI</th>
                </tr>
                {data.map((entry: PopularHoldingData, i: number) => (
                    <tr key={i} className="row">
                        <td>
                            <strong>{entry.held_by}</strong>
                        </td>
                        <td>{entry.name}</td>
                        <td>{entry.title}</td>
                        <td>{entry.lei}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TopHoldingsDetails;
