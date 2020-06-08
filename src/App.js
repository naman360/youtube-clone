import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import {SearchBar,VideoDetails} from './components'


export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             video:[],
             selectedVideo:null
        }
    }
    
    handleSubmit = async (searchItem) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyBIy9UQalb7KbcNKEbPUzvqRY9w74RDRek',
                q: searchItem
            }
        })
        
        this.setState({
            video:response.data.items,
            selectedVideo:response.data.items[0]
        })
        console.log(this.state.selectedVideo.id.videoId);
       
    }
    render() {
        const {selectedVideo} = this.state;
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video list */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
