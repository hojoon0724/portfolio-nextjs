export default function FontTest() {
  const testString = 'The quick brown fox jumps over the lazy dog';
  return (
    <div className="section flex">
      <div className="fonts-size-container flex column">
        <div className="font-1">{testString}</div>
        <div className="font-2">{testString}</div>
        <div className="font-3">{testString}</div>
        <div className="font-4">{testString}</div>
        <div className="font-5">{testString}</div>
        <div className="font-6">{testString}</div>
        <div className="font-7">{testString}</div>
        <div className="font-8">{testString}</div>
      </div>
    </div>
  );
}
