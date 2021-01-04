import React from 'react';
import styles from './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';
import FontAwesome from 'react-fontawesome';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >
                    <div><FontAwesome name="play-circle" style={{color:'#fff',fontSize:'15px',marginLeft:'5px',marginTop:'5px'}} /></div>
                </div>
                <div className={styles.right}>
                    <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosListTemplate;