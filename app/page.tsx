import React from 'react';

import { Metadata } from 'next';

import AnimatedWrapper from '_core/components/AnimatedWrapper';
import HomeHeader from '_core/components/HomeHeader';
import Tile from '_core/components/Tile';

import styles from './page.module.scss';
import ContactTile from '_core/components/ContactTile';
import InfoText from '_core/components/InfoText';
import DemoTile from '_core/components/DemoTile';

type TPageData = {
    title: string;
    desc: string | JSX.Element;
};

type TContactData = {
    name: string;
    email: string;
    linkedin: string;
    img: string;
};

type TDemoData = {
    title: string;
    video: string;
};




function Description(desc: string | JSX.Element) {
    const formattedDesc = (desc as string).split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
            <br />
        </span>
    ));

    return <div>{formattedDesc}</div>;
}

const HomePage = async () => {
    const ExploreData: TPageData = {
        title: 'Explore Exovision',
        desc: "Welcome to Exovision, your launchpad to an epic adventure across the stars! Get ready to blast off into the unknown and explore the far reaches of the universe in this thrilling educational game. Strap in, future astronauts! now's your chance to dive into the world of space exploration. Discover mysterious planets, navigate the galaxy, and unlock the secrets of NASA’s most cutting-edge missions—all through immersive, interactive gameplay! Are you ready to embark on a journey like no other? The universe is waiting!",
    };

    const AboutData: TPageData = {
        title: 'About',
        desc: InfoText(),
    };

    const DemoData: TDemoData = {
        title: 'Demo',
        video: 'https://www.youtube.com/watch?v=3F6bTGqYj4Q',
    };


    const ContactData: TPageData = {
        title: 'Contact',
        desc: "We are a team of enthusiastic engineers from Egypt, driven by our fascination with space exploration. ExoVision was developed as our contribution to NASA's International Space Apps Challenge, with the aim of applying our skills and knowledge while igniting a shared passion for the cosmos.",
    };

    const IbrahimData: TContactData = {
        name: 'Ibrahim Hamada',
        email: "ibrahimhamada439@gmail.com",
        linkedin: "https://www.linkedin.com/in/ibrahim-hamada-158669218/",
        img: require('_core/assets/ibrahim.jpg').default,
    };

    const AyaData: TContactData = {
        name: 'Aya Hossam',
        email: "ayahm1@uci.edu",
        linkedin: "https://www.linkedin.com/in/aya-hussam-eldin-356938209/",
        img: require('_core/assets/aya.jpeg').default,
    };

    const KareemData: TContactData = {
        name: 'Kareem Morsi',
        email: "kreemmorsy2001@gmail.com",
        linkedin: "https://www.linkedin.com/in/kreemmorsy/",
        img: require('_core/assets/kareem.jpeg').default,
    };

    const RehandData: TContactData = {
        name: 'Rehand Mohamed',
        email: "rehandabdelhady@gmail.com",
        linkedin: "https://www.linkedin.com/in/rehand-abdelhady-5150a1206/",
        img: require('_core/assets/rehand.jpeg').default,
    };

    const RehabData: TContactData = {
        name: 'Rehab Yehia',
        email: "rehabyehia282002@gmail.com",
        linkedin: "https://www.linkedin.com/in/rehabyehia/",
        img: require('_core/assets/rehab.jpeg').default,
    };



    return (
        <AnimatedWrapper>
            <div className={styles.container}>
                <div className={styles.tileContainer}>
                    <Tile data={ExploreData} margin='70px'/>
                    <Tile data={AboutData} margin='70px'/>
                    <DemoTile data={DemoData} margin='70px'/>

                    <Tile data={ContactData} margin='70px'/>

                <div className={styles.tileCtr}>

                    <ContactTile data={IbrahimData}  margin='24px' maxWidth='468px'/>
                    <ContactTile data={AyaData} margin='24px' maxWidth='468px'/>
                    <ContactTile data={KareemData} margin='24px' maxWidth='468px'/>
                    <ContactTile data={RehandData} margin='24px' maxWidth='468px'/>
                </div>

                    <div className={styles.oneCard}>
                    <ContactTile data={RehabData} margin='24px' maxWidth='468px'/>
                    </div>



                </div>
            </div>
        </AnimatedWrapper>
    );
};
export const generateMetadata = async () => {
    const metadata: Metadata = {};
    metadata.title = 'ExoVision';

    return metadata;
};

export default HomePage;
