import corleone from '/Users/macbook/jh-app/src/movies_assets/godfather_page/corleone.jpeg';

function Godfather() {
    return(
        <div className='godfather_page'>
            <div className="godfather_title_date_director">
                <h1 className="godfather_page_title"> The Godfather</h1>
                <p className="godfather_release_date"> 1972</p>
                <p className="godfather_director"> Directed by Francis Ford Coppola</p>
            </div>

            <div 
            className="corleone_image"
            style={{backgroundImage: `url(${corleone})`}}/>
        </div>
    )
}

export default Godfather;