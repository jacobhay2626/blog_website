import './App.css';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'; 
import tv_BG from '/Users/macbook/jh-app/src/media_assets/sopranos.jpeg';
import movie_BG from '/Users/macbook/jh-app/src/media_assets/SLWM.jpeg';
import music_BG from '/Users/macbook/jh-app/src/media_assets/moon.jpeg';
import football_BG from '/Users/macbook/jh-app/src/interests_assets/saka.jpeg';
import travel_BG from '/Users/macbook/jh-app/src/interests_assets/travel.jpeg';
import cp_BG from '/Users/macbook/jh-app/src/interests_assets/CP.jpeg';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <div className='home_page'>
        <div 
        className='section1'>
        <h1 className='intro_title'>Jacob Hayward</h1>
        <p className='intro_script'> EXPLAIN WHAT THE PAGE IS ABOUT</p>
        </div>




        <div className='section2'>
          <h2 className='media_title'>Media</h2>
          <motion.div 
          className='movies_box'
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.5 },
          }}
          style={{backgroundImage: `url(${movie_BG})`}}>
            <Button 
            className='movie_button'
            style={{cursor: 'pointer'}}
            onClick={event => window.location.href='/movies'}
            />
          </motion.div>





          <motion.div 
          className='tv_box'
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.5 },
          }}
          style={{backgroundImage: `url(${tv_BG})`}}>
            <Button
              className='tv_button'
              style={{cursor: 'pointer'}}
              onClick={event =>  window.location.href='/tv'}
            />
          </motion.div>





          <motion.div 
          className='music_box'
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.5 },
          }}
          style={{backgroundImage: `url(${music_BG})`}}
          >
            <Button 
            className='music_button'
            style={{cursor:'pointer'}}
            onClick={event =>  window.location.href='/music'}
            />
          </motion.div>

        </div>




        <div className='section3'>
        <h2 className='interests_title'>Interests</h2>
        <motion.div 
        className='football_box'
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.5 },
        }}
        style={{backgroundImage: `url(${football_BG})`}}>
          <Button 
          className='football_button'
          style={{cursor:'pointer'}}
          onClick={event => window.location.href='/football'}/>
        </motion.div>


        <motion.div 
        className='travel_box'
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.5 },
        }}
        style={{backgroundImage: `url(${travel_BG})`}}>
          <Button 
          className='travel_button'
          style={{cursor:'pointer'}}
          onClick={event => window.location.href='/travel'}/>
        </motion.div>

        <motion.div 
        className='cp_box'
        whileHover={{
          scale: 1.07,
          transition: { duration: 0.5 },
        }}
        style={{backgroundImage: `url(${cp_BG})`}}
        >
          <Button 
          className='cp_button'
          style={{cursor: 'pointer'}}
          onClick={event => window.location.href='/CP'}
          />
        </motion.div>


        </div>
      </div>
    </div>

  );
}

export default App;
