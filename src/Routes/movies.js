import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'; 
import men_BG from '../movies_assets/first_page/men.jpeg'; 
import la_BG from '../movies_assets/first_page/La_La_Land.png'; 
import mitty_BG from '../movies_assets/first_page/mitty.jpeg'; 
import gwh_BG from '../movies_assets/first_page/gwh.jpeg'; 
import godfather_BG from '../movies_assets/first_page/godfather.jpeg'; 

function Movies() {
    return(
        <div className="movies_route">
                <h1 className="movies_title">Movies Page</h1>

            <div className="fav_movies_section">
                <h2 className="fav_movies_title"> Favourites:</h2>
                <motion.div 
                className="godfather_box"
                whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.5 },
                  }}
                style={{backgroundImage: `url(${godfather_BG})`}}>
                    <Button 
                    className="godfather_button"
                    onClick={event=> window.location.href='/godfather'}
                    style={{cursor:'pointer'}}/>
                </motion.div>

                <motion.div 
                className="GWH_box"
                whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.5 },
                  }}
                style={{backgroundImage: `url(${gwh_BG})`}}>
                    <Button 
                    className="GWH_button"
                    onClick={event=> window.location.href='/gwh'}
                    style={{cursor:'pointer'}}/>
                </motion.div>

                <motion.div 
                className="mitty_box"
                whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.5 },
                  }}
                style={{backgroundImage: `url(${mitty_BG})`}}
                >
                    <Button 
                    className="mitty_button"
                    onClick={event=> window.location.href='/mitty'}
                    style={{cursor:'pointer'}}/>
                </motion.div>

                <motion.div 
                className="men_box"
                whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.5 },
                  }}
                style={{backgroundImage: `url(${men_BG})`}}>
                    <Button 
                    className="men_button"
                    onClick={event=>window.location.href="/angry_men"}
                    style={{cursor: 'pointer'}}/>
                </motion.div>

                <motion.div 
                className="la_box"
                whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.5 },
                  }}
                style={{backgroundImage: `url(${la_BG})`}}>
                    <Button 
                    className="la_button"
                    onClick={event=> window.location.href='/lala'}
                    style={{cursor: 'pointer'}}/>
                </motion.div>

            </div>

            {/* <div className="fav_trilogies_section">
                <h3 className="fav_trilogies_title"> Trilogies</h3>
            </div>

            <div className="fav_perf_section">
                <h3 className="fav_perf_title"> Performances </h3>
            </div>

            <div className="fav_directors_section">
                <h3 className="fav_directors_title"> Directors </h3>
            </div> */}
            
        </div>
    )
}

export default Movies;