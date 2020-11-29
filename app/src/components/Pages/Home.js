import React from 'react';
import {NavLink} from 'react-router-dom'

const showcase = require('../../pics/backgroundPics/showcase.png').default;

function Home(){

    return(
        <div>
            
            <section id="section1">
		        <div id="welcome-message">
			        <h1>NEED A SMARTPHONE?</h1>
                    <p>We can save you time and money<br></br>by finding the best deal for you</p><br></br>
                    <div id="button-container">
                		<NavLink className = 'cta' activeClassName='active' to={'/Comparison'}>
         				 Compare Phones
          				</NavLink>
		        	</div>
		        </div>
		        <a href="#section2" id="chevron"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
	        </section>
	
	        <section id="section2">
		        <h1>Why should you compare mobile phones with us?</h1>
		        <p>
			        If you’re one of the 94% of adults who own a mobile phone, and you’re in the market for a new contract, 
			        we can help. We have a huge range of leading networks, mobile phone deals and contracts for you to choose from. 
		        </p>
		        <p>
			        Whether you’re looking for the latest iPhone, Samsung, or Android device, or you’ve already 
			        got a handset you love,  compare phone deals, including monthly contract  and  SIM only deals,  
			        and find the right one for you.
		        </p>
		        <div className="img">
			        <img src={showcase} alt="smartphones"></img>
		        </div>
		        <h1>How to compare mobile phones?</h1>
		        <p>
			        When it comes to choosing a mobile phone deal, you might want to think about things like: 
		        </p>
		        <p>
			        Operating system:  Android, Windows and Apple operating systems each have their own unique features, 
			        so it's largely a matter of what you prefer. But you also need to think about whether you want to integrate 
			        your phone with other devices. 
		        </p>
		        <p>
			        Camera quality:  If you're a keen photographer, this will be a real deciding factor, particularly if you often shoot in poor light conditions. 
		        </p>
		        <p>
			        Screen size and image quality:  This will be important, especially if you're planning to watch video on your phone. 
		        </p>
		        <p>
			        Battery life:  You'll want a phone that will last for a reasonable amount of time after being charged. 
		        </p>
		        <div id="button-container">
                <NavLink className = 'cta' activeClassName='active' to={'/Comparison'}>
          Compare Phones
          </NavLink>
		  </div>
	        </section>

           
        </div>
    )
}

export default Home;