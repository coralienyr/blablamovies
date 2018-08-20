import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default class MovieItem extends Component {

  constructor (props){
    super(props);
    this.state = ({
      movie : [],
      userVotes : []
    })
  }

  componentWillMount() {
    axios.get(`http://www.omdbapi.com/?apikey=e29795f4&i=${this.props.match.params.movieId}`)
      .then(res => {
        const movie = res.data;
        this.setState({ movie });
      })
      if(localStorage.myMovie1){
        this.setState({
          userVotes : {
            0 : localStorage.getItem('myMovie1')
        }
        });
      }
      if(localStorage.myMovie2){
        this.setState({
          userVotes : {
            0 : localStorage.getItem('myMovie1'),
            1 : localStorage.getItem('myMovie2')
        }
        });
      }
      if(localStorage.myMovie3){
        this.setState({
          userVotes : {
            0 : localStorage.getItem('myMovie1'),
            1 : localStorage.getItem('myMovie2'),
            2 : localStorage.getItem('myMovie3')
        }
        });
      }
  }
  handleVote = (e) =>{
    var myMovie1 = localStorage.getItem('myMovie1');
    var myMovie2 = localStorage.getItem('myMovie2');
    var myMovie3 = localStorage.getItem('myMovie3');
    if(!myMovie1 || !myMovie2 || !myMovie3){
      if(myMovie1 === this.state.movie.Title){
        alert('Vous avez déjà voté pour ce film');
      }
      else if(myMovie2 === this.state.movie.Title){
        alert('Vous avez déjà voté pour ce film');
      }
      else if(myMovie3 === this.state.movie.Title){
        alert('Vous avez déjà voté pour ce film');
      }
      else{
        if(!myMovie1){
          localStorage.setItem('myMovie1', this.state.movie.Title);
          this.setState({
            userVotes :{
              ...this.state.userVotes,
              0 : this.state.movie.Title
            }
          })
        }
        else if(!myMovie2){
          localStorage.setItem('myMovie2', this.state.movie.Title);
          this.setState({
            userVotes :{
              ...this.state.userVotes,
              1 : this.state.movie.Title
            }
          })
        }
        else if(!myMovie3){
          localStorage.setItem('myMovie3', this.state.movie.Title);
          this.setState({
            userVotes :{
              ...this.state.userVotes,
              2 : this.state.movie.Title
            }
          })
        }
      }
    }else{
      if(myMovie1 === this.state.movie.Title){
        localStorage.removeItem('myMovie1');
        this.setState({
          userVotes : {
            ...this.state.userVotes,
            0 : ''
          }
        })
      }
      else if(myMovie2 === this.state.movie.Title){
        localStorage.removeItem('myMovie2');
        this.setState({
          userVotes : {
            ...this.state.userVotes,
            1 : ''
          }
        })
      }
      else if(myMovie3 === this.state.movie.Title){
        localStorage.removeItem('myMovie3');
        this.setState({
          userVotes : {
            ...this.state.userVotes,
            2 : ''
          }
        })
      }
      else{
        alert('You have already chosen 3 movies');
      }
    }
  }


 render() {
  return (
   <div className="page transition-item">
   <div className="content movieItem">
   <div className="flex head">
    <Link to='/lists' className="back">></Link>
        <h1>{this.state.movie.Title}</h1>
        </div>
        <div className='movie'>
        <div className='movieInfo'>
        {
        this.state.movie.Poster !== "N/A" &&
        <img src={this.state.movie.Poster} alt={this.state.movie.Title} className="imgSmall"/>
        }
        {
        this.state.movie.Plot !== "N/A" &&
            <p>{this.state.movie.Plot}</p>
        }
        {
        this.state.movie.Genre !== "N/A" &&
        <p><strong>Genre :</strong> {this.state.movie.Genre}</p>
        }
        {
        this.state.movie.Released !== "N/A" &&
        <p><strong>Released :</strong> {this.state.movie.Released}</p>
        }
        {
        this.state.movie.Year !== "N/A" &&
        <p><strong>Year :</strong> {this.state.movie.Year}</p>
        }
        {
        this.state.movie.imdbRating !== "N/A" &&
        <p><strong>Rating :</strong> {this.state.movie.imdbRating} 
        {
            this.state.movie.imdbVotes !== "N/A" && 
        <span> ({this.state.movie.imdbVotes} votes)</span>
        }
        </p>
        }
        </div>
        {
        this.state.movie.Poster !== "N/A" &&
        <img src={this.state.movie.Poster} alt={this.state.movie.Title} className="imgTall" />
        }
        </div>
        <button onClick={(e) => this.handleVote(e)} className="buttonVote">{
          (this.state.userVotes[0] === this.state.movie.Title || this.state.userVotes[1] === this.state.movie.Title || this.state.userVotes[2] === this.state.movie.Title) ? "Unvote" : "vote"
        }</button>
   </div>
   </div>
  )
 }
}
