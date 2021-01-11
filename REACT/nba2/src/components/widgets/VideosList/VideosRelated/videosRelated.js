import React from 'react';
import styles from '../videosList.css';

import VideoListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    <div className={styles.relatedWrapper}>
        <br/>
        <hr/>
        <h3 style={{textAlign:'center',fontFamily:'Trebuchet MS'}}>Related Videos</h3>
        <hr/>
        <VideoListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;