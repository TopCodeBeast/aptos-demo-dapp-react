import { useEffect, useRef, useState } from "react";
import archplusImg from "../imgs/archplus.png";
import archlabsImg from "../imgs/archlabs.png";

interface NFT {
  id: number;
  name: string;
  image: string;
}

export default function Breed() {
  const [isBreedVisible, setIsBreedVisible] =
    useState<boolean>(false);
  const breedRef: React.RefObject<HTMLDivElement> = useRef(null);

  const [nftList, setNFTList] = useState<NFT[]>([
    { id: 1, name: "ArchLabs #1", image: archlabsImg },
    { id: 2, name: "ArchLabs #2", image: archplusImg },
    { id: 3, name: "ArchLabs #3", image: archlabsImg },
    { id: 4, name: "ArchLabs #4", image: archplusImg },
  ]);

  const [selectedNFT, setSelectedNFT] = useState<NFT>(nftList[0]);

  const displayList = () => {
    setIsBreedVisible(!isBreedVisible);
  };

  const selectNFT = (nft: NFT) => {
    setSelectedNFT(nft);
    setIsBreedVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (breedRef && breedRef !== null) {
      const cur = breedRef.current;
      if (cur && !cur.contains(event.target as Node)) {
        setIsBreedVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const found = (
    <div className="breed" ref={breedRef}>
      <div className="nfts">
        <img
          src={selectedNFT?.image}
          alt="nft"
          width="220px"
          className="displayer"
        />

        <button type="button" onClick={displayList}>
          {process.env.REACT_APP_BREEDING_COLLECTION_NAME}
        </button>

        {isBreedVisible ? (
          <div className="list">
            {nftList.map((nft, index) => {
              return (
                <div
                  key={index}
                  className={`list-item ${
                    nft.id === selectedNFT.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    selectNFT(nft);
                  }}
                >
                  <img src={nft.image} alt="nft" width="100%" />
                  <p>{nft.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="title">
        <h3>Breed</h3>
      </div>

      <div className="claw">
        <img src={archplusImg} alt="breed" width="220px" />

        <button type="button">{process.env.REACT_APP_BREEDING_ITEM_NAME}</button>
      </div>
    </div>
  );

  const notFound = (
    <div className="not-found-breed">
      <p>You Do not have a {process.env.REACT_APP_BREEDING_COLLECTION_NAME} in your wallet</p>
    </div>
  );


  // render the nftFound or nftNotFound based on the condition
  return <>{found}</>;
}
