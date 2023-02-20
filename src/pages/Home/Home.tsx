import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Header from '../../layouts/components/Header/Header';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
        </div>
    )
}

export default Home;
