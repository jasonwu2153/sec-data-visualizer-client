import { grey } from '@ant-design/colors';
import React, { CSSProperties } from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <p style={styles.title}>About This Project</p>
            <p style={styles.text}>
                Hey there! Thanks for checking out our SEC Data Visualizer for
                trust/index fund analysis. We created this website as a final
                project for CPSC 437{' '}
                <a href="https://zoo.cs.yale.edu/classes/cs437/">@Yale.</a> We
                thought this would be a cool idea since a lot of corporate and
                government investment filings are published publicly on{' '}
                <a href="https://www.sec.gov/">sec.gov.</a> We wanted to make
                use of this public info by creating a program that scrapes and
                displays public NPORT-P filings so that you can see the
                investment distributions in a much more readable way.
            </p>
            <p style={styles.text}>
                From a technical perspective, this project consisted of 3 parts:
                <ul style={{ marginTop: 10 }}>
                    <li>
                        <a href="https://github.com/jasonwu2153/sec-web-scraper-13f">
                            Python Web Scraper
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jasonwu2153/sec-data-visualizer-server">
                            Flask Server
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jasonwu2153/sec-data-visualizer-client">
                            React Client
                        </a>
                    </li>
                </ul>
                If you click on any of the components above, we'll redirect you
                to the corresponding GitHub repository. 😊 Each of the
                repositories has a pretty descriptive README.md that explains
                the code with more technical details.
            </p>
            <p style={{ ...styles.title, marginTop: 30 }}>Creators</p>
            <p style={styles.text}>
                Now that we've talked a bit about the project itself, allow us
                to introduce ourselves.
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 660,
        margin: '0 auto',
        padding: 30,
        textAlign: 'left'
    } as CSSProperties,
    title: {
        fontSize: 28,
        fontWeight: 500,
        marginBottom: 10
    } as CSSProperties,
    text: {
        color: grey[5],
        marginBottom: 10
    } as CSSProperties
};

export default About;
