interface StakedNFTSProps {
  item: {
    image: string;
    name: string;
  }[];
}

export default function StakedNFTS({ item }: StakedNFTSProps) {
  return (
    <div className="StakedNFTS">
      <h4>Staked {process.env.REACT_APP_STAKING_COLLECTION_NAME}</h4>
      <div className="Staked">
        {item.map((item, index) => {
          return (
            <div className="WB" key={index}>
              <img src={item.image} alt={item.name} key={index} />
              <button>{item.name}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
