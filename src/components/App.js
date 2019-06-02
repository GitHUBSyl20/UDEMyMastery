import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';

import VideoList from './VideoList'
import VideoDetails from './VideoDetails';

class App extends Component {
    state = { videos: [], selectedVideo: null }
    //to use  async methode alternative !!!

componentDidMount(){
    this.onSearchSubmit("houses")
}

    onSearchSubmit = async term => {

        //simpler method to get the data
        const response = await youtube.get('/search', {
            //the query is the search term we are going to use after ? and the api adress
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
         });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container" style={{ margintop: '10px' }} >
                <SearchBar onSubmitParent={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                        <VideoList 
                        onVideoSelect={this.onVideoSelect} 
                        videos={this.state.videos} 
                        className="VideoItem" />
                        </div> 
                    </div>
                </div>
            </div >
        )
    }
}

export default App; 
