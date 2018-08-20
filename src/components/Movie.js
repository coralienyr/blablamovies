import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Movie extends Component {


 render() {
  return (
   <div className="movie flex space-b">
   {
       this.props.details.Poster !== "N/A" &&
       <img src={this.props.details.Poster} alt={this.props.details.Title} />
    }
    <div className="infos flex space-b">
        <h2>{this.props.details.Title}</h2>
        <p>{this.props.details.Year}</p>
    </div>
    <Link to={`/movieItem/${this.props.details.imdbID}`} className="button">See details</Link>
   </div>
  )
 }
}
