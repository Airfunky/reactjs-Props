function MovieCard(title, year, genre, image){
    return(
        <div className="card">
            <img src={image} alt={image}/>
            <h3>{title}</h3>
            <p>Genre: {genre}</p>
            <p> Year: {year}</p>
        </div>
    );
}

export default MovieCard;