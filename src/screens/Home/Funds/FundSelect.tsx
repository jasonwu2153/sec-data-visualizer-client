import { blue } from '@ant-design/colors';
import React, { CSSProperties, Dispatch } from 'react';

import { black, lightGray, white } from '../../../utils/colors';
import { SecCompany } from '../../../utils/types';

interface Props {
    funds: SecCompany[];
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

const FundSelect = (props: Props) => {
    const { funds, selectedIndex, setSelectedIndex } = props;
    return (
        <div style={styles.wrapper}>
            <div style={styles.headerWrapper}>
                <p style={styles.headerText}>Explore By Company</p>
            </div>
            {funds.map((fund: SecCompany, i: number) => {
                const isSelected = i === selectedIndex;
                return (
                    <div
                        style={{
                            ...styles.fundWrapper,
                            ...(isSelected && { background: blue.primary })
                        }}
                    >
                        <p
                            style={{
                                ...styles.fundName,
                                ...(isSelected && { color: white })
                            }}
                        >
                            {fund.name.toUpperCase()}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    wrapper: {
        width: 300,
        maxHeight: 600,
        overflowY: 'scroll'
    } as CSSProperties,
    headerWrapper: {
        width: '100%',
        paddingBottom: 20
    } as CSSProperties,
    headerText: {
        margin: 0,
        fontColor: black,
        fontWeight: 600,
        fontSize: 18
    } as CSSProperties,
    fundWrapper: {
        background: lightGray,
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        width: '100%'
    } as CSSProperties,
    fundName: {
        margin: 0,
        fontColor: black,
        fontWeight: 600
    } as CSSProperties
};

export default FundSelect;
