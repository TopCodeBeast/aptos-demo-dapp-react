export default function StakingDetails() {
  return (
    <>
      <div className="container">
        <div className="staking-details">
          <div className="box">
            <h5>{process.env.REACT_APP_STAKING_COLLECTION_NAME} HELD</h5>
            <span>14</span>
          </div>
          <div className="box">
            <h5>{process.env.REACT_APP_STAKING_COLLECTION_NAME} STACKED</h5>
            <span>12</span>
          </div>
          <div className="box">
            <h5>ESTIMATED REWARDS</h5>
            <span>275 ${process.env.REACT_APP_STAKING_COLLECTION_TOKEN_SYMBOL}</span>
          </div>
          <div className="box">
            <h5>REWARD RATE</h5>
            <span>72 ${process.env.REACT_APP_STAKING_COLLECTION_TOKEN_SYMBOL}/DAY</span>
          </div>
        </div>
      </div>
    </>
  );
}
