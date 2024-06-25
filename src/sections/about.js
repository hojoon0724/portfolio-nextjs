import StackIcon from '@/components/stackIcon';

export default function About() {
  return (
    <div className="section about column" id="about">
      <h1>About Hojoon</h1>
      <h4>Stuff I use:</h4>
      <div className="software-list-container">
        <StackIcon icon={'illustrator.svg'} description={''} bgColor={''} padding={''} />
      </div>
    </div>
  );
}
