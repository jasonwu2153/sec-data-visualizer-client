import { Tabs } from 'antd';
import React, { CSSProperties } from 'react';

import NavBar from '../../components/NavBar';

const { TabPane } = Tabs;

const Home = () => (
    <div style={styles.wrapper}>
        <NavBar />
        <div style={styles.contentWrapper}>
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span>Funds</span>} key="1" />
                <TabPane tab={<span>Holdings</span>} key="2" />
            </Tabs>
        </div>
    </div>
);

const styles = {
    wrapper: {
        width: '100%',
        minHeight: '100vh'
    } as CSSProperties,
    contentWrapper: {
        width: '100%',
        padding: '20px 30px 0 30px'
    } as CSSProperties
};

export default Home;
