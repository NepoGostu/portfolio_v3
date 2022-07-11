import React, {useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fsdeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTSANS = {
        description: 'A talanted graduate developer of IT-Incubator course with a strong academic background and some commercial experience. Ability to think through a problem coupled with the confidence to make ideas heard. A proven ability to enhance company software with the aim of improving operational functionality in line with bussines requirement.\n' +
            '    Currently looking for a software developer opportunity that will allow to work alongside an expert team of developers. Thereby helping to drive career progression to more senior roles in the future.',
        highlights: {
            bullets: [
                'Front-End Development',
                'Interactive Front End as per the design',
                'React and Redux-thunk',
                'Building REST API'
            ],
            heading: 'Here are a Few HighLights:'
        }
    }
    const renderHighlight = (props) => {
        SCREEN_CONSTSANS.highlights.bullets.map((value, i) => (
            <div className={'highlight'} key={i}>
                <div className={'highlight-block'}>
                    <span>{value}</span>
                </div>
            </div>
        ))
    }

    return (
        <div className={'about-me-container'} id={props.id || ''}>
            <div className={'about-me-parent'}>
                <ScreenHeading
                    title={'About Me'}
                    subHeading={'Why choose me?'}
                />
                <div className={'about-me-card'}>
                    <div className={'about-me-profile'}></div>
                    <div className={'about-me-details'}>
                        <span className={'about-me-description'}>{SCREEN_CONSTSANS.description}</span>
                        <div className={'about-me-highlights'}>
                            <div className={'highlight-heading'}>
                                <span>{SCREEN_CONSTSANS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className={'about-me-options'}>
                            <button className={'btn primary-btn'}>
                                {''}
                                Hire me{''}
                            </button>
                            <a href="Andrei_Zuev_CV_eng.pdf" download={'Andrei_Zuev_CV.pdf'}>
                                <button className={'btn highlighted-btn'}> Get resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;