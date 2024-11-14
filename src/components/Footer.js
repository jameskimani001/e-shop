import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevents the default form submission
        // Add your subscription logic here (e.g., API call)
        console.log('Subscribed with email:', email);
        setEmail(''); // Clear the input field after subscription
    };

    return (
        <footer>
            <section className="newsletter"> 
                <h2>Subscribe to our Newsletter</h2>
                <div className="box">
                    <form onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state on input change
                            required // Ensures the field is filled out
                        />
                        <button type="submit" className="btn">Subscribe</button>
                    </form>
                </div>
            </section>
            <section className="contact-details">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:info@smartwarehub.com">info@smartwarehub.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+254 (234) 567-890</a></p>
                <p>Location: 123 SmartWare St, Tech City, CA 12345</p>
            </section>
            <p>© 2024 SmartWare Hub</p>
        </footer>
    );
};

export default Footer;
