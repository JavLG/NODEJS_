import React from 'react';
import ArtistContainer from '../containers/artist_container';

const Artist = (props) => {
    return (
        <div>
            <ArtistContainer {...props}/>
        </div>
    );
};

export default Artist;