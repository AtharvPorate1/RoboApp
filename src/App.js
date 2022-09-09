import React, { Component } from "react";
import CardList from "./List";
import { robo } from "./robots";
import SearchBox from "./SearchBox";
import scroll from "./scroll"


class App extends Component  {
    constructor(){
        super()
        this.state = {
            robo: robo,
            searchfield:''
        }
    }
    onsearchChange =(event)=>{
        this.setState({searchfield: event.target.value})
       
        console.log(event.target.value)
    }
    render(){
        const filteredRobots = this.state.robo.filter(robo =>{
            return robo.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <scroll>
                    <CardList robo={filteredRobots}/>
                </scroll>
    
            </div>
            
        )

    }
        
    
    
}


export default App;