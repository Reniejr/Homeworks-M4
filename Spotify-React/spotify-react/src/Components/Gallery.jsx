import React, { PureComponent } from 'react'
import './Styles/Gallery.scss'
import {Row, Spinner} from 'react-bootstrap'
import HomeNav from '../Data/HomeNav.json'

export default class Gallery extends PureComponent {
    urlPlayists = "https://deezerdevs-deezer.p.rapidapi.com/playlist/"
    headers = {
		"x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
    
    state={
        selected:this.props.selected,
        section: this.props.section,
        playlist:[],
        loading:true
    }

    fetchPlaylist = async (playlists)=>{
        let array = []
        playlists.map(async(item)=>{
            let response = await fetch(
                    this.urlPlayists+item.id,
                    {headers: this.headers}
            )
            let result = await response.json()
            array.push(result)
            // this.setState({playlist: [...this.state.playlist, result]})
            
        })
        this.setState({playlist: [...this.state.playlist, array]})
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading: false})
            HomeNav[0].playlists.map(list=>this.fetchPlaylist(list))
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.section !== this.state.section){
            this.fetchPlaylist(this.state.playlist)
        }
    }

    render() {
        let {hashtag} = this.props
        return (
            <Row>
                        <h1>{hashtag}</h1>
                        <div className="gallery">
                            {this.state.loading? (
                                ['0','1','2','3','4'].map(item=>{
                                    return(
                                        <div className="coverPlay" key={item.id}>
                                        <Spinner 
                                        animation='border'
                                        variant='light'
                                        />
                                    </div>
                                    )
                                })
                            ):(
                                // <h1>loading...</h1>
                                this.state.playlist.map(item=>{
                                    return(
                                        item.map(cover=>{
                                                return(
                                                    <div className="coverPlay" key={cover.id}>
                                                        <img src={cover.picture_big} alt=""/>
                                                        <p>{cover.title}</p>
                                                    </div>
                                                )        
                                        })
                                    )
                                    
                                })
                            )}
                        </div>
                    </Row>
        )
    }
}
