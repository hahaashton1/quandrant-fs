import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";

const Navbar = () => {
  const [balance, setBalance] = useState();
  const [connectedAddress, setConnectedAddress] = React.useState(null);
  const { address, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({
    addressOrName: address,
    token: "0x3bA3952faca093737C747BD2e5641C692D43a69a",
  });

  useEffect(() => {
    if (isConnected && address) {
      setConnectedAddress(address);
      setBalance(data);
    }
  }, [isConnected, address]);

  const handleDisconnect = () => {
    disconnect();
    setConnectedAddress(null);
  };

  return (
    <div className="navbar bg-secondary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">🎮 EGame</a>
      </div>
      <div className="flex-auto">
        <div className="flex items-center space-x-2 ml-auto text-[#1E0536]">
          {/* {isConnected && (
            <div className="px-2">
              Balance: {balance?.formatted} {balance?.symbol}
            </div>
          )} */}
          <div>
            Balance: {data?.formatted} {data?.symbol}
          </div>
          {connectors.map((connector) => (
            <button
              className="btn btn-primary"
              key={connector.id}
              onClick={() =>
                connectedAddress ? handleDisconnect() : connect({ connector })
              }
            >
              {/* {
            isConnected ? (<></>) : (<>Connect {connector.name}</>)
        } */}
              {/* {connector.name ? (<>Connect Wallet</>) : (<></>)} */}
              {connector.name}{" "}
              {connectedAddress && (
                <>{connectedAddress.substring(0, 6)}... (Disconnect)</>
              )}
              {/* {connectedAddress} */}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
