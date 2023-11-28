import hunting from '/Users/macbook/jh-app/src/movies_assets/walter_page/walter.jpeg'; 

function Mitty() {
    return (
        <div className='WalterMitty_page'>
            <div className="WalterMitty_title_date_director">
                <h1 className="WalterMitty_page_title"> The Secret Life of Walter Mitty</h1>
                <div className="WalterMitty_date_director">
                <p className="WalterMitty_release_date"> 2013</p>
                <p className="WalterMitty_director"> Directed by Ben Stiller</p>
                </div>
            </div>

            <div 
            className="mitty_image"
            style={{backgroundImage: `url(${hunting})`}}
            />
        </div>
    )
}

export default Mitty;

// style={{backgroundImage: `url(${hunting})`}}

