import React, { CSSProperties } from 'react';

import { lightGray } from '../../utils/colors';

const NavBar = () => {
    return (
        <div style={styles.wrapper}>
            <p style={styles.titleText}>SEC Data Visualizer</p>
        </div>
    );
};

const styles = {
    wrapper: {
        background: lightGray,
        width: '100%',
        padding: '10px 30px 10px 30px',
        zIndex: 2
    } as CSSProperties,
    titleText: {
        fontWeight: 600
    } as CSSProperties
};

export default NavBar;
