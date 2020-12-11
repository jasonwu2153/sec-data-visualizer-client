import React, { CSSProperties } from 'react';

import { lightGray } from "../../utils/colors"

const NavBar = () => {
    return (
        <div style={styles.wrapper}>
            <p style={styles.titleText}>SEC Data Visualizer</p>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'relative',
        background: lightGray,
        padding: '20px 30px 20px 30px',
        width: '100%',
        zIndex: 1
    } as CSSProperties,
    titleText: {
        fontWeight: 600,
        fontSize: 16,
        margin: 0
    } as CSSProperties
};

export default NavBar;
