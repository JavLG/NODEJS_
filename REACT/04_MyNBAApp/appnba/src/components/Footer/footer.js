import React from 'react';
import style from './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => (
    <div className={style.footer}>
      <Link to="/" className={style.logo}>
      <img alt="NBA Logo" src="/images/nba_logo.png"/>
      </Link>
      <div className={style.right}>
        @NBA {CURRENT_YEAR} All rights reserved. - Github.com/javLG
      </div>
    </div>
  );

export default Footer;