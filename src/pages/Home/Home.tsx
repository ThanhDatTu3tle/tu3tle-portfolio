import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Header from '../../layouts/components/Header/Header';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
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

                <Title content='Work - My products' id='work'/>
                <div className={cx('work')}>
                    
                    <div className={cx('components')}>
                        <Image src='https://i.imgur.com/JfkXoG5.png'/>
                        <h3>Lotteria Clone</h3>
                    </div>

                    <div className={cx('components')}>
                        <Image src='https://i.imgur.com/BGwKMW0.png'/>
                        <h3>tu3tle Porfolio</h3>
                    </div>

                    <div className={cx('components')}>
                        <Image src='https://i.imgur.com/J8PjWiM.png'/>
                        <h3>In js we trust - quiz app</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
