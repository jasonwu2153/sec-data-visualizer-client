import React, { CSSProperties } from 'react';

import NavBar from '../../components/NavBar';

const Home = () => (
    <div style={styles.wrapper}>
        <NavBar />
    </div>
);

const styles = {
    wrapper: {
        width: '100%',
        minHeight: '100vh'
    } as CSSProperties
};

export default Home;
