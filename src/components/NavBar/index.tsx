import React, { CSSProperties } from 'react';

import { lightGray } from '../../utils/colors';

const NavBar = () => {
    return (
        <div style={styles.wrapper}>
            <p>SEC Data Visualizer</p>
        </div>
    );
};

const styles = {
    wrapper: {
        background: lightGray,
        width: '100%',
        padding: 3,
        zIndex: 2
    } as CSSProperties
};

export default NavBar;
