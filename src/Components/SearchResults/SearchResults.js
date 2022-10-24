import React from 'react';
import {TrackList} from '../TrackList/TrackList.js';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        );
    }
}