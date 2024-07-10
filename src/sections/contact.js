import SocialButton from '@/components/socialButton';
import { iconsData } from '@/data/iconsData';
import React from 'react';

export default function Contact() {
  return (
    <div
      className="section contact flex row scroll-anchor"
      id="contact"
    >
      <div className="contact-title">{`Hey, let's connect!`}</div>
      <div className="form-container flex">
        <form>
          <input type="text" placeholder="Your Name" />
          <input
            type="email"
            placeholder="your@email.com"
          />
          <textarea placeholder={`What's up?`} />
          <button className="pri-accent-btn">Submit</button>
        </form>
      </div>

      <div className="contact-title">{`Social`}</div>

      <div className="social-links-container flex column">
        <SocialButton
          socialPlatform={iconsData.githubdark}
          socialUrl="https://github.com/hojoon0724"
        />
        <SocialButton
          socialPlatform={iconsData.instagramblack}
          socialUrl="https://www.instagram.com/hojoonkimimages/"
        />
        <SocialButton
          socialPlatform={iconsData.linkedinblack}
          socialUrl="https://www.linkedin.com/in/hojoon-kim-dev/"
        />
      </div>
    </div>
  );
}
