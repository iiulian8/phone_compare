import React from 'react'

function Contact(){
    return(
        <div>
            <section id="section-8">
                <div className='contact-details'>
		            <h1>Talk to us</h1><br></br>
                    <p>If you have an enquiry or want to give us feedback,
                    you can get in touch with our team who will be happy to help.
                    </p><br></br>
			        <p>
				    General enquiries: +44 (0)1905 792801 Compliants: +44 (0)1905 792818
			        </p><br></br>
				    <a href="mailto:office@phonecompare.com"><span>Email: office@phonecompare.com</span></a><br></br>
                    <p>OFFICE HOURS:<br></br>Monday to Friday: 09:00 - 17:00<br></br>Saturday: 10:00 - 16:00<br></br>
                    Sunday: Closed
                    </p><br></br>
                    <h1>Providing a high level of service is important to us,<br></br>so do not hesitate to 
                    get in touch.<br></br>We are more than happy to help.
                    </h1>
		        </div>
                <div className="contact-form">
    	            <form action="contact-form.php" method="post">
  			            <div className="elem-group">
    			            <label htmlFor="customer_name">Full Name</label>
    			            <input type="text" id="customer_name" name="customer_name" placeholder="eg. Claudia Boarna" required></input>
  			            </div>
  			            <div className="elem-group">
    			            <label htmlFor="customer_email">E-mail Address</label>
    			            <input type="email" id="customer_email" name="customer_email" placeholder="eg. claudia@gmail.com" required></input>
				        </div>
  			            <div className="elem-group">
    			            <label htmlFor="customer_message">Your Message</label>
    			            <textarea rows="4" cols="50"  id="customer_message" name="customer_message" placeholder="Type your message here..." required></textarea>
  			            </div>
				        <button class="cta elem-group" type="submit" name="save" value="submit">Send Message</button>
			        </form>
                </div>
	        </section>
        </div>
    )
}

export default Contact;