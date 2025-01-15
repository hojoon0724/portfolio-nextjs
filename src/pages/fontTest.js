export default function FontTest() {
  const testString = 'The quick brown fox jumps over the lazy dog';
  return (
    <div className="section flex">
      <div className="fonts-size-container flex flex-col">
        {/* <div className="font-1">{testString}</div> */}
        <div className="text-wide-bold">{testString}</div>
        {/* <div className="font-2">{testString}</div> */}
        <div className="text-narrow-thin">{testString}</div>
        {/* <div className="font-3">{testString}</div> */}
        <div className="text-standard">{testString}</div>
        {/* <div className="font-4">{testString}</div> */}
        <div className="text-all-caps">{testString}</div>
        {/* <div className="font-5">{testString}</div> */}
        <div className="text-long">{testString}</div>
        {/* <div className="font-6">{testString}</div> */}
        <div className="text-slab-large-thick">{testString}</div>
        <div className="text-slab-large-thin">{testString}</div>
        <div className="text-slab-medium-thick">{testString}</div>
        <div className="text-slab-medium-thin">{testString}</div>
        <div className="text-slab-small-thick">{testString}</div>
        <div className="text-slab-small-thin">{testString}</div>
        {/* <div className="font-7">{testString}</div> */}
        <div className="text-mono-large">{testString}</div>
        <div className="text-mono-medium">{testString}</div>
        {/* <div className="font-8">{testString}</div> */}
        <div className="text-mono-small">{testString}</div>
      </div>
    </div>
  );
}
