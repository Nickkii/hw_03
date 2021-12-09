const Film = () => {
    const name = "The Shawshank Redemption"
    const distributed  = "Columbia Pictures"
    const produced  = "Niki Marvin"
    const country  = "United States"
    const starring = ["Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton",
        "William Sadler",
        "Clancy Brown",
        "Gil Bellows",
        "James Whitmore"]
    const cinematography = 'Roger Deakins'
    const releaseDate = 'September 23, 1994'
    const musicBy = 'Thomas Newman'

    return(
        <>
        <div className='aboutFilm'>
        <h1><b>My favorite film - </b>{name}</h1>
        <p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.</p>
        <div className='filmDescription'>
            <div className='filmImg'>
                <img src="https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg" alt="The Shawshank Redemption" />
            </div>
            <div className='filmShotDecr'>
                <p><b>Starring: </b>{starring.join(', ')}</p>
                <p><b>Produced by: </b>{produced}</p>
                <p><b>Cinematography: </b>{cinematography}</p>
                <p><b>Music by: </b>{musicBy}</p>
                <p><b>Distributed by: </b>{distributed}</p>
                <p><b>Country: </b>{country}</p>
                <p><b>Release date: </b>{releaseDate}</p>
            </div>
        </div>
        </div>
        </>

    )




}
export default Film;

