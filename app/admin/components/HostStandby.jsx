export default function HostStandby({ view, viewLabels, onLaunch }) {
  return (
    <div className="host-standby">
      <p className="mut">
        Current Display Screen: <b>{viewLabels[view] || view}</b>
      </p>
      <p className="mut">
        Select a round and school above, then click <b>&quot;Next Question ⏩&quot;</b> to display the first question on screen!
      </p>
      <button className="btn" onClick={onLaunch}>Launch First Question ⏩</button>
    </div>
  );
}
