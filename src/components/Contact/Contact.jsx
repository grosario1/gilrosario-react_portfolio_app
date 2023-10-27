import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  return (
    <section>
      <h1>Contact</h1>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} />
        <input type="email" name="email" placeholder="Email" value={formData.email} />
        <textarea name="message" placeholder="Message" value={formData.message}></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
