import { PieChartOutlined, StarOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { CSSProperties } from 'react';

import NavBar from '../../components/NavBar';
import Funds from './Funds';
import Holdings from './Holdings';

const { TabPane } = Tabs;

const Home = () => (
    <div style={styles.wrapper}>
        <NavBar />
        <div style={styles.contentWrapper}>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <PieChartOutlined />
                            Fund Data
                        </span>
                    }
                    key="1"
                >
                    <Funds />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <StarOutlined />
                            Holdings Data
                        </span>
                    }
                    key="2"
                >
                    <Holdings />
                </TabPane>
            </Tabs>
        </div>
    </div>
);

const styles = {
    wrapper: {
        width: '100%'
    } as CSSProperties,
    contentWrapper: {
        width: '100%',
        padding: '20px 30px 0 30px'
    } as CSSProperties
};

export default Home;
