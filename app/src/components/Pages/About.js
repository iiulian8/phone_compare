import React from 'react';
import {NavLink} from 'react-router-dom'
 
const team = require('../../pics/backgroundPics/team.png').default;


function About(){
    return(
        <div>
            <section id="section2">
            <div className="img">
			        <img src={team} alt="smartphones"></img>
		        </div>
            <h1>Who we are?</h1>
                <p>Phonecompare is an online smartphonephone comparison service that helps you 
                    to compare prices on a range of products and services.<br></br>
                    We are a medium sized business based in Birmingham, West Midlands. 
                    Phonecompare.com has been helping consumers save money on their 
                    mobile phones and broadbands deals since September 20th 2000. 
                    Originally focusing on smartphones, we added a broadband comparison service
                    in 2001.
                 </p>
		        <h1>Regulatory information</h1>
		        <p>
                Phonecompare only operates online, over the phone and at community events - we don't do door
                to door sales. If someone has visited your home claiming to be from Phonecompare, 
                please let us know at customerservices@Phonecompare.com.
		        </p>
                <p>
                The data we use to calculate your results for our personal finance services is provided
                directly to us by suppliers or their agents. We immediately update any product and
                rate changes to ensure our results are accurate. We strive to cover the whole market 
                but only compare products from suppliers we have a relationship with.
                </p>
		        <p>
			        Whether you’re looking for the latest iPhone, Samsung, or Android device, or you’ve already 
			        got a handset you love,  compare phone deals, including monthly contract  and  SIM only deals,  
			        and find the right one for you.
		        </p>
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

export default About;