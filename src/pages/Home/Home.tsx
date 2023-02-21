import * as React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Header from '../../layouts/components/Header/Header';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import Work from '../../layouts/components/Work/Work';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {

    const work = [
        {
            "name": "Clone - Lotteria",
            "detail": "Rebuilt from an interface, and database to a business flow based on Lotteria's website",
        },
        {
            "name": "tu3tle porfolio",
            "detail": "My porfolio",
        },
        {
            "name": "In js we trust - quiz app",
            "detail": "Website to test JavaScript level for everyone, all questions are from Mr. Vuong Nguyen and the UI is made by me - tu3tle.",
        },
    ]

    return (
        <div className={cx('wrapper')}>            
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('intro')}>
                        <h1>Hello 👋</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>I'm Thanh Dat Nguyen - tu3tle</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>front-end developer</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>based in Ho Chi Minh City, Vietnam</h1>
                    </div>
                </div>
                
                <div className={cx('contact')}>
                    <div className={cx('social')}>
                        <h3>Github</h3>
                    </div>
                    
                    <div className={cx('social')}>
                        <h3>Linkedln</h3>
                    </div>

                    <div className={cx('social')}>
                        <h3>Facebook</h3>
                    </div>

                    <div className={cx('social')}>
                        <h3>Blog</h3>
                    </div>

                    <div className={cx('social')}>
                        <h3>Email</h3>
                    </div>
                </div>

                <Title content='Work' id='work'/>
                <div className={cx('work')}>
                    {
                        work.map((data) => (
                            <Work key={data} data={data}/>
                        ))
                    }
                </div>

                <Title content='About' id='about'/>
                <div className={cx('about')}>
                    <p>Ngu</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
