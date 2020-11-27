import React, { PureComponent } from 'react'
import './Styles/HomePage.scss'
import HomeNav from '../Data/HomeNav.json'
import Gallery from './Gallery'
// import {Row, Spinner} from 'react-bootstrap'

export default class HomePage extends PureComponent {
    urlPlayists = "https://deezerdevs-deezer.p.rapidapi.com/playlist/"
    headers = {
		"x-rapidapi-key": "6cc8e6c6femsh03ff5cffd3927e2p12ac5djsn4ad2e0705629",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}

    state={
        selected:null,
        section: ['#Throwback', "Top"],
        playlist: [],
        loading:true
    }
    
    select = async (index, hashtag, playlist)=>{
        this.setState({
            selected: index,
            section: hashtag,
            playlist: [playlist]
        })
        this.state.playlist.map(list=>this.fetchPlaylist(list))
    }

    fetchPlaylist = async (playlists)=>{
        let array= []
        playlists.map(async(item)=>{
            let response = await fetch(
                    this.urlPlayists+item.id,
                    {headers: this.headers}
            )
            let result = await response.json()
            array.push(result)
            
        })
        this.setState({playlist:[...this.state.playlist, array]})
        
    }

    // componentDidMount = async()=>{
    //     setTimeout(()=>{
    //         this.setState({loading: false})
    //         HomeNav[0].playlists.map(list=>this.fetchPlaylist(list))
    //     }, 2000)
    // }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.section !== this.state.section && prevState.playlist !== this.state.playlist){
    //         console.log(this.state.section)
    //     }
    // }

    render() {
        let {theme} = this.props
        return (
            <div id='homepage' className={theme}>
                <nav>
                    <ul>
                        {HomeNav.map((item, index)=>{
                            return(
                                <li
                                onClick={this.select.bind(this, index, item.hashtag, item.playlists)}
                                style={
                                    {
                                        color: this.state.selected === index? 'white':'',
                                        borderBottom: this.state.selected === index? '2px solid white':'none'
                                    }
                                }
                                key={index}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.state.section.map((hashtag, index)=>{
                    return(
                        <Gallery
                        fetch={this.fetchPlaylist}
                        index={index}
                        hashtag={hashtag}
                        selected={this.state.selected}
                        section={this.state.section}
                        playlist={this.state.playlist}
                        key={index}
                        />
                    // <Row key={index}>
                    //     <h1>{hashtag}</h1>
                    //     <div className="gallery">
                    //         {this.state.loading && this.state.playlist.length<=0 ? (
                    //             ['0','1','2','3','4'].map(item=>{
                    //                 return(
                    //                     <div className="coverPlay" key={item.id}>
                    //                     <Spinner 
                    //                     animation='border'
                    //                     variant='light'
                    //                     />
                    //                 </div>
                    //                 )
                    //             })
                    //         ):(
                    //             this.state.playlist.map((item, index)=>{
                    //                 return(
                    //                     item.map(cover=>{
                    //                         return(
                    //                             <div className="coverPlay" key={cover.id}>
                    //                                 <img src={cover.picture_big} alt=""/>
                    //                                 <p>{cover.title}</p>
                    //                             </div>
                    //                         )
                    //                     })
                    //                 )
                    //             })
                    //         )}
                    //     </div>
                    // </Row>
                    )
                })}
                    
            </div>
        )
    }
}
