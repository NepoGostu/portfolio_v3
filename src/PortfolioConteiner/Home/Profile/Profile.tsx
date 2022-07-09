import React from 'react';
import './Profile.css'


export default function Profile() {
    return (
        <div className={'profile-container'}>
            <div className={'profile-parent'}>
                <div className={'profile-details'}>
                    <div className={'colz'}>
                        <div className={'colz-icon'}>
                            <a href={'https://www.linkedin.com/in/zuev-andrey/'}>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href={'https://t.me/Van_shuls'}>
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href={'https://github.com/NepoGostu'}>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href={'https://www.facebook.com/profile.php?id=100080684955272'}>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href={'#'}>
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className={'profile-details-name'}>
                            <span className={'primary-text'}>
                                {''}
                                Hello,Iam
                                <span className={'highlighted-text'}> Andrei
                            </span>
                            </span>
                    </div>
                    <div className={'profile-details-role'}>
                            <span className={'primary-text'}>
                                {''}
                                <h1>
                                    Frontend developer
                                </h1>
                                <span className={'profile-role-tagline'}>
                                              knack of building applications with front  operations.
                                </span>
                            </span>
                    </div>
                    <div className={'profile-options'}>
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
                <div className={'profile-picture'}>
                    <div className={'profile-picture-background'}></div>
                </div>
            </div>
        </div>
    );
}
