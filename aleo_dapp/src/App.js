import { useMemo } from "react";
import { WalletProvider } from "aleo-hooks";

import {
  PuzzleWalletAdapter,
  LeoWalletAdapter,
  FoxWalletAdapter,
  SoterWalletAdapter,
  configureConnectionForPuzzle
} from 'aleo-adapters';
import "./App.css";

function App() {
    const wallets = useMemo(
        () => [
            new LeoWalletAdapter({
                appName: 'Aleo app',
            }),
            new PuzzleWalletAdapter({
                programIdPermissions: {
                  ['AleoMainnet']: ['dApp_1.aleo', 'dApp_1_import.aleo', 'dApp_1_import_2.aleo'],
                  ['AleoTestnet']: ['dApp_1_test.aleo', 'dApp_1_test_import.aleo', 'dApp_1_test_import_2.aleo']
                },
                appName: 'Aleo app',
                appDescription: 'A privacy-focused DeFi app'                
            }),
            new FoxWalletAdapter({
                appName: 'Aleo app',
            }),
            new SoterWalletAdapter({
                appName: 'Aleo app',
            })
        ],
        [],
    );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <div className="App">
        Some content...
      </div>
    </WalletProvider>
  );
}


export default App;