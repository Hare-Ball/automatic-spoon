import React from 'react';

function ContactInfo() {
    return(
            <div class="container col-12 justify-content-center" id="ContactForm">
                 <section class="card">
                <br />
                <form>

                <ul>
                    <label>
                    Name:
                    <br />
                    <input type="text" name="name" />
                </label>
                </ul>
                <ul>
                <label>
                    Email:
                    <br />
                    <input type="text" name="email" />
                </label>
                </ul>
                <ul>
                <label>
                    Message:
                    <br />
                    <input type="text" name="message" />
                </label>
                </ul>
                <br />
                <ul>
                <input type="submit" value="Submit" />
                </ul>
                </form>
                </section>
            </div>        
    )
}

export default ContactInfo; 

