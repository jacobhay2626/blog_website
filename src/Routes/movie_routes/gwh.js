import hunting from '/Users/macbook/jh-app/src/movies_assets/hunting_page/hunting.jpeg';

function GWH() {
    return (
        <div className='GoodWillHunting_page'>
            <div className="GoodWillHunting_title_date_director">
                <h1 className="GoodWillHunting_page_title"> Good Will Hunting</h1>
                <p className="GoodWillHunting_release_date"> 1997</p>
                <p className="GoodWillHunting_director"> Directed by Gus Van Sant</p>
            </div>

            <div 
            className="hunting_image"
            style={{backgroundImage: `url(${hunting})`}}/>
        </div>
    )
}

export default GWH;