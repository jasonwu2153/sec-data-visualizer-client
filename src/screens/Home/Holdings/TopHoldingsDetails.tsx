import { blue } from '@ant-design/colors';
import React, { CSSProperties } from 'react';
import { black, gray100, gray200 } from 'src/utils/colors';

import { PopularHoldingData } from '../../../utils/types';
import '../../../utils/style.css';

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

// {data.map((entry: PopularHoldingData, i: number) => (
//     <div className="cardContainer" key={i}>
//         <div className="h2">{entry.name}</div>
//         <div className="b1">{entry.title}</div>
//         <div>LEI: {entry.lei}</div>
//         <div>
//             Held By <strong>{entry.held_by}</strong> Funds
//         </div>
//     </div>
// ))}
