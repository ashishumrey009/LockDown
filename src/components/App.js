import React from 'react'
import SearchBar from './SearchBar'
import unplash from '../api/unplash'
import ImageList from './ImageList'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    state={
        images:[]
    }
    onSearchSubmit = async(term) => {
        const response = await unplash.get('/search/photos',{
            params:{query:term},
           
        })
            this.setState({
                images:response.data.results
            })
    

    }
    render(){
 return (
         <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found:{this.state.images.length} images
            <ImageList images={this.state.images}/>
        </div>
    );
 }
 };
export default App