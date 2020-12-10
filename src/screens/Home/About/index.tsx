import { blue, grey } from '@ant-design/colors';
import { LinkedinOutlined } from '@ant-design/icons';
import React, { CSSProperties } from 'react';

import JasonPhoto from '../../../assets/jason_profile.jpg';
import KevinPhoto from '../../../assets/kevin_profile.jpg';
import MichalPhoto from '../../../assets/michal_profile.jpeg';

interface Bio {
    name: string;
    schoolTitle: string;
    workTitle: string;
    workPlace: string;
    photo: string;
    linkedIn: string;
}

const CREATOR_BIOS: Bio[] = [
    {
        name: 'Jason Wu',
        schoolTitle: "CS | Yale '22",
        workTitle: 'Software Engineer',
        workPlace: 'Snackpass',
        photo: JasonPhoto,
        linkedIn: 'https://www.linkedin.com/in/jwu215/'
    },
    {
        name: 'Michal Lewkowicz',
        schoolTitle: "CS & Math | Yale '23",
        workTitle: 'Researcher',
        workPlace: 'Yale Robotics Lab',
        photo: MichalPhoto,
        linkedIn: 'https://www.linkedin.com/in/michal-lewkowicz-135796173/'
    },
    {
        name: 'Kevin Zhang',
        schoolTitle: "CS & Phil | Yale '23",
        workTitle: 'Product Design',
        workPlace: 'Ameeleo',
        photo: KevinPhoto,
        linkedIn: 'https://www.linkedin.com/in/idesignandbuildthings/'
    }
];

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
                to the corresponding GitHub repository.{' '}
                <span aria-label="smile">😊</span> Each of the repositories has
                a pretty descriptive README.md that explains the code with more
                technical details.
            </p>
            <p style={{ ...styles.title, marginTop: 30 }}>Creators</p>
            <p style={styles.text}>
                If you ever have any questions about the implementation of the
                project or just want to chat, feel free to reach out to any of
                us on LinkedIn. We'd be more than happy to talk.{' '}
                <span aria-label="hand-wave">👋</span>
            </p>
            <div style={styles.profilesWrap}>
                {CREATOR_BIOS.map((bio: Bio) => (
                    <div style={styles.profileWrap}>
                        <img src={bio.photo} style={styles.profileImg} alt="" />
                        <p style={styles.nameText}>{bio.name}</p>
                        <p style={styles.defaultText}>{bio.schoolTitle}</p>
                        <p style={styles.defaultText}>{bio.workTitle}</p>
                        <p style={styles.workPlaceText}>@{bio.workPlace}</p>
                        <a href={bio.linkedIn} className="hover-darken">
                            <LinkedinOutlined style={styles.linkedInIcon} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 660,
        margin: '0 auto',
        padding: '30px 30px 120px 30px',
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
    } as CSSProperties,
    profilesWrap: {
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'flex-start'
    } as CSSProperties,
    profileWrap: {
        margin: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    } as CSSProperties,
    profileImg: {
        width: 100,
        borderRadius: '50%'
    } as CSSProperties,
    nameText: {
        marginTop: 15,
        marginBottom: 0,
        fontWeight: 500
    } as CSSProperties,
    defaultText: {
        margin: 0,
        color: grey[5]
    } as CSSProperties,
    workPlaceText: {
        margin: 0,
        color: blue[5]
    } as CSSProperties,
    linkedInIcon: {
        fontSize: 24,
        color: blue[5],
        marginTop: 10,
        cursor: 'pointer'
    } as CSSProperties
};

export default About;
