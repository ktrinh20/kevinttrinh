import React from 'react';
import { useMediaQuery } from 'react-responsive';
import WSYCS from '../photos/wsycs.png';
import Earth from '../photos/Earth.png';
import LPSLogo from '../photos/LPS.png';
import SkypeAScientist from '../photos/skype-a-scientist.png';
import './OutreachPage.css';

function OutreachPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 961px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 960px)'});

    return(
        <div className="outreach-page">
            <div className="vertical-flex">

                <div id="research-summary-container">
                    <p id="outreach-statement-header">Outreach statement</p>
                    <p className="outreach-text">I believe that the opportunity to education belongs to all. Beyond
                    research, scientists play a crucial role in combating misinformation and fostering 
                    society's baseline STEM literacy. My outreach efforts are focused on making science 
                    more accessible and understandable.
                    </p>
                </div>

                <div className={isWideScreen ? "horizontal-flex outreach-container" : "vertical-flex outreach-container"}>
                    <img className="outreach-pic" src={WSYCS}/>
                    <p className="outreach-text"><strong>Why Should You Care Science (WSYCS) (2021 - now)</strong><br/>
                    I created a STEAM (STEM + Art) outreach page on Instagram where each
                     post is a visual slideshow talking about STEM in plain-speak. Posts are generally created 
                     by different graduate students and postdocs in a variety of disciplines, but we all 
                     have one goal in mind: to explain why our science is important. This endeavor is 
                     supported by the American Geophysical Union - Sharing Science grant.</p>
                    <br/><br/>
                </div>

                <div className={isWideScreen ? "horizontal-flex outreach-container" : "vertical-flex outreach-container"}>
                    <img className="outreach-pic" src={Earth}/>
                    <p className="outreach-text"><strong>ASU SESE Prison Education Program (2021 - now)</strong><br/>
                    The ASU SESE Prison Education Program is offers courses to incarcerated individuals at 
                    the Eyman Arizona Prison Complex in Earth and Planetary Science. This effort is completely 
                    led by graduate students from curriculum design to teaching.
                    </p>
                </div>

                <div className={isWideScreen ? "horizontal-flex outreach-container" : "vertical-flex outreach-container"}>
                    <img className="outreach-pic" src={LPSLogo}/>
                    <p className="outreach-text"><strong>Letters to a Pre-Scientist (2020 - now)</strong><br/>
                        The LPS program connects STEM professionals to middle school students as pen pals. 
                        Our goals are to demystify STEM professionals and help middle schoolers learn about 
                        STEM career pathways.
                    </p>
                </div>

                <div className={isWideScreen ? "horizontal-flex outreach-container" : "vertical-flex outreach-container"}>
                    <img className="outreach-pic" src={SkypeAScientist}/>
                    <p className="outreach-text"><strong>Skype-a-Scientist (2020 - now)</strong><br/>
                        The Skype-a-Scientist program connects STEM professionals to classrooms and interest groups
                        world wide. I offer informal lectures about our solar system.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OutreachPage;