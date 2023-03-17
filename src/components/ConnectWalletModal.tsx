import { useWallet } from "@manahippo/aptos-wallet-adapter";
import Modal from "react-bootstrap/Modal";

const ConnectWalletModal = (props: any) => {
  const { show, onConnect } = props;

  const wallet = useWallet();

  const clickhandler = async (adapter:any) => {
    await wallet.select(adapter.name);
    onConnect();
  };

  return (
    <Modal id="pontem-wallet-adapter" show={show} onHide={onConnect} centered>
      <Modal.Body className="d-flex flex-column pontem-wallet-adapter-body">
        {wallet.wallets.map((walletType) => {
          const adapter = walletType.adapter;
          return (
            <button key={adapter.name} onClick={()=>clickhandler(adapter)} className="d-flex flex-row align-items-center gap-4 my-1 p-2 btn btn-danger">
              <img src={adapter.icon} width="50px"/>
              <h6 className="mb-0">{adapter.name}</h6>
            </button>
          );
        })}
      </Modal.Body>
    </Modal>
  );
};

export default ConnectWalletModal;
