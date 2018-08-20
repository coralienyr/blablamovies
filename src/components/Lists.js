import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Movie from './Movie';
export default class Lists extends Component {

  constructor (props){
    super(props);
    this.state = ({
      movies : []
    })
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?apikey=e29795f4&s=star+wars&type=movie`)
      .then(res => {
        const movies = res.data.Search;
        this.setState({ movies });
      })
  }


  handleSubmit = (e) =>{
    e.preventDefault();
    var name = this.state.search;
    axios.get(`http://www.omdbapi.com/?apikey=e29795f4&s=${name}&type=movie`)
    .then(res => {
      const movies = res.data.Search;
      this.setState({ movies });
    })
  }
  
  handleSearch = (e) =>{
    this.setState({
      search: e.target.value
    });
  }

 render() {
		const movie = Object
    .keys(this.state.movies)
    .map(key => <Movie key={key} details={this.state.movies[key]} />);
  return (
   <div className="page transition-item">
      <div className="content">
        <div className='contentFix'>
      <div className="flex head">
        <Link to='/' className="back">></Link>
        <h1>Blablamovie</h1>
      </div>
      <div id="moviesList">
          {movie}
          </div>
        </div>
        <div className="searchBar">
        <form className="flex space-b">
          <input type="text" placeholder="Search a movie by title" onChange={e => this.handleSearch(e)} />
          <button onClick={(e)=>this.handleSubmit(e)} ><i className="fas fa-search"></i></button>
        </form>
        </div>
      </div>
   </div>
  )
 }
}
