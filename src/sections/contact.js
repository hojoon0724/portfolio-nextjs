import React from 'react';

export default function Contact() {
  return (
    <div className="section contact flex row" id="contact">
      <div className="contact-title">{`Hey, let's connect!`}</div>

      <div className="contact-title">{`Social`}</div>

      <div className="form-container flex">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="your@email.com" />
          <textarea placeholder={`What's up?`} />
          <button className="pri-accent-btn">Submit</button>
        </form>
      </div>

      <div className="social-links-container flex column">
        <div className="instagram">Instaram</div>
        <div className="linkedin">linkedIn</div>
        <div className="github">GitHub</div>
      </div>
    </div>
  );
}
