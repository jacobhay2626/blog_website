import angry from '/Users/macbook/jh-app/src/movies_assets/angry_page/angrymen.jpeg';

function AngryMen() {
    return (
        <div className='AngryMen_page'>
            <div className="AngryMen_title_date_director">
                <h1 className="AngryMen_page_title"> 12 Angry Men</h1>
                <p className="AngryMen_release_date"> 1957</p>
                <p className="AngryMen_director"> Directed by Sidney Lumet</p>
            </div>

            <div 
            className="hunting_image"
            style={{backgroundImage: `url(${angry})`}}
            />
        </div>
    )
}

export default AngryMen;

