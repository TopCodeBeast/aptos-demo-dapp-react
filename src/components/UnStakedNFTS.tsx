interface UnStakedNFTSProps {
  item: {
    image: string;
    name: string;
  }[];
}

export default function UnStakedNFTS({ item }: UnStakedNFTSProps) {
  return (
    <div className="UnStakedNFTS">
      <h4>My Wallet</h4>
      <div className="stake">
        {item.map((item, index) => {
          return (
            <div className="SB" key={index}>
              <img src={item.image} alt={item.name} key={index} />
              <button>{item.name}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
