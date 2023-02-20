import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
// import FacebookIcon from '@mui/icons-material/Facebook';

import styles from './Header.module.scss';

const cx = classNames.bind(styles)

const Header: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h3>tu3tle</h3>
            </div>

            <div className={cx('shortcut')}>
                <h4>Work</h4>
                <h4>About</h4>
                <h4>Blog</h4>
                <h4>Resume</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Header;
