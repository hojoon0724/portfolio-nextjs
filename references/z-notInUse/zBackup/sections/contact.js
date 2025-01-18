import styles from './contact.module.css';
import SocialButton from '@/z-notInUse/zBackup/socialButton';
import { iconsData } from '@/data/iconsData';

export default function Contact() {
  return (
    <div className={`section flex row scroll-anchor max-width-block ${styles.contact}`} id="contact">
      <div className={`${styles['contact-title']} text-wide-bold`}>{`Hey, let's connect!`}</div>
      <div className={`form-container flex`}>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="your@email.com" />
          <textarea placeholder={`What's up?`} />
          <button className={`pri-accent-btn`}>Submit</button>
        </form>
      </div>

      <div className={`${styles['contact-title']} text-wide-bold`}>{`Social`}</div>
      <div className={`${styles['social-links-container']} flex column`}>
        <SocialButton socialPlatform={iconsData.githubdark} socialUrl="https://github.com/hojoon0724" />
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
