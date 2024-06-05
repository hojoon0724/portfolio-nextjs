export default function ColorTest() {
  return (
    <div className="flex column center color-test-container">
      <div className="box">
        <h1>headline 1</h1>
      </div>
      <div className="box text-pri-accent">
        <h1>headline 1</h1>
        <h2>headline 2</h2>
        <h3>headline 3</h3>
        <h4>headline 4</h4>
      </div>
      <div className="dark box text-sec-accent">
        <h1>headline 1</h1>
      </div>
      <div className="buttons-container flex row">
        <div className="box pri-accent">Primary Accent</div>
        <div className="box sec-accent">Secondary Accent</div>
        <div className="box confirm">Confirm Button</div>
        <div className="box error">Error Button</div>
      </div>
    </div>
  );
}
