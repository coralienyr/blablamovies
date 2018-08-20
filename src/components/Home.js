import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Home extends Component {


    constructor (props){
        super(props);
        this.state = ({
          movies : []
        })
      }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?apikey=e29795f4&s=inception&type=movie`)
          .then(res => {
            const movies = res.data.Search;
            this.setState({ movies });
          })
      }

      
 render() {
  return (
   <div className="homepage transition-item">
    <div className="content">
        <h1>Blablamovie</h1>
        <h2>What is it ?</h2>
        <div className="flex space-b img3">
        {
            this.state.movies[0] ?
            <img src={this.state.movies[0].Poster} alt={this.state.movies[0].Title} />
            : null
        }
        {
            this.state.movies[1] ?
            <img src={this.state.movies[1].Poster} alt={this.state.movies[1].Title} />
            : null
        }
        {
            this.state.movies[4] ?
            <img src={this.state.movies[4].Poster} alt={this.state.movies[4].Title} />
            : null
        }
        </div>
        <div className="flex space-b like">
        <img src="img/like.png" alt="like"/>
        <img src="img/dislike.png" alt="dislike"/>
        <p>Every week, vote for your 3 favorite movies. At the end of the week, the winning film is revealed</p>
        </div>
        <Link to='/lists' className='button'>GO</Link>
    </div>
   </div>
  )
 }
}
