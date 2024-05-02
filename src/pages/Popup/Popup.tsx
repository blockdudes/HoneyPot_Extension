
// import React, { useState, useEffect } from 'react';
// import './Popup.css';

// const Popup = () => {
//   const [tokenAddress, setTokenAddress] = useState('');
//   const [apiData, setApiData] = useState(null);
//   const [risk, setRisk] = useState('');
//   const [riskLevel, setRiskLevel] = useState('');
//   const [tokenName, setTokenName] = useState('');
//   const [isHoneypot, setIsHoneypot] = useState('');

//   const checkHoneypot = (address) => {
//     // for honeypot check we are sending address to the background script
//     chrome.runtime.sendMessage({ action: "checkToken", tokenAddress: address }, function(response) {
//       if (response.success) {
//         // Update the state with the honeypot check result
//         setApiData(response.data);
//         if (response.data.summary) {
//           setRisk(response.data.summary.risk || '');
//           setRiskLevel(response.data.summary.riskLevel.toString() || '');
//         }
//         setTokenName(response.data.token.name || '');
//         setIsHoneypot(response.data.honeypotResult.isHoneypot || false);
//       } else {
//         console.error(response.error);
//       }
//     });
//   };

//   useEffect(() => {
    
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       const currentTab = tabs[0];
//       if (currentTab && currentTab.url && isUniswapUrl(currentTab.url)) {
//         const tokenAddress = extractTokenAddress(currentTab.url);
//         if (tokenAddress) {
//           setTokenAddress(tokenAddress);
//           checkHoneypot(tokenAddress);
//         }
//       }
//     });
//   }, []);

//   function isUniswapUrl(url) {
//     return url.includes("app.uniswap.org/explore/tokens/base/");
//   }

//   // Function to extract the token address from the Uniswap URL
//   function extractTokenAddress(url) {
//     const regex = /base\/(0x[a-fA-F0-9]{40})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   }

//   return (
//     <div className="App" style={{ textAlign: "center" }}>
//       <header className="App-header">
//         <h1>HoneyPot Extension</h1>
        
//         {/* Display the token address */}
//         <div>
//           <h2>Token Address</h2>
//           <p>{tokenAddress}</p>
//         </div>
        
//         {/* Display the token information */}
//         {apiData && (
//           <div>
//             <h2>Contract Overview</h2>
//             <p>Risk: {risk}</p>
//             <p>Risk Level: {riskLevel}</p>
//             <p>Token Name: {tokenName}</p>
//             <p>Is Honeypot: {isHoneypot ? 'Yes' : 'No'}</p>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Popup;

// import React, { useState, useEffect } from 'react';
// import './Popup.css';

// const Popup = () => {
//   const [address, setAddress] = useState('');
//   const [apiData, setApiData] = useState(null);
//   const [risk, setRisk] = useState('');
//   const [riskLevel, setRiskLevel] = useState('');
//   const [tokenName, setTokenName] = useState('');
//   const [isHoneypot, setIsHoneypot] = useState('');

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     checkHoneypot(address);
//   };

//   const checkHoneypot = (address) => {
//     chrome.runtime.sendMessage({ action: "checkToken", tokenAddress: address }, function(response) {
//       if (response.success) {
//         setApiData(response.data);
//         if (response.data.summary) {
//           setRisk(response.data.summary.risk || '');
//           setRiskLevel(response.data.summary.riskLevel.toString() || '');
//         }
//         setTokenName(response.data.token.name || '');
//         setIsHoneypot(response.data.honeypotResult.isHoneypot || false);
//       } else {
//         console.error(response.error);
//       }
//     });
//   };

//   useEffect(() => {
//     // Check if the current tab URL is on Uniswap
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       const currentTab = tabs[0];
//       if (currentTab && currentTab.url && isUniswapUrl(currentTab.url)) {
//         const tokenAddress = extractTokenAddress(currentTab.url);
//         if (tokenAddress) {
//           setAddress(tokenAddress);
//           checkHoneypot(tokenAddress);
//         }
//       }
//     });
//   }, []);

//   const isUniswapUrl = (url) => {
//     return url.includes("app.uniswap.org/explore/tokens/base/");
//   };

//   const extractTokenAddress = (url) => {
//     const regex = /base\/(0x[a-fA-F0-9]{40})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
//   };

//   return (
//     <div className="App" style={{ textAlign: "center" }}>
//       <header className="App-header">
//         <h1>HoneyPot Extension</h1>
//         {address ? (
//           <div>
//             <h2>Token Address</h2>
//             <p>{address}</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="address">Enter Token Address:</label>
//               <input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={handleAddressChange}
//                 placeholder="Paste or type token address here"
//                 required
//               />
//             </div>
//             <button type="submit">Check Honeypot</button>
//           </form>
//         )}

//         {/* Display the token information */}
//         {apiData && (
//           <div>
//             <h2>Contract Overview</h2>
//             <p>Risk: {risk}</p>
//             <p>Risk Level: {riskLevel}</p>
//             <p>Token Name: {tokenName}</p>
//             <p>Is Honeypot: {isHoneypot ? 'Yes' : 'No'}</p>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Popup;





import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [address, setAddress] = useState('');
  const [apiData, setApiData] = useState(null);
  const [risk, setRisk] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [isHoneypot, setIsHoneypot] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkHoneypot(address);
  };

  const checkHoneypot = (address) => {
    chrome.runtime.sendMessage({ action: "checkToken", tokenAddress: address }, function(response) {
      if (response.success) {
        setApiData(response.data);
        if (response.data.summary) {
          setRisk(response.data.summary.risk || '');
          setRiskLevel(response.data.summary.riskLevel.toString() || '');
        }
        setTokenName(response.data.token.name || '');
        setIsHoneypot(response.data.honeypotResult.isHoneypot || false);
      } else {
        console.error(response.error);
      }
    });
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url) {
        if (isUniswapUrl(currentTab.url)) {
          const tokenAddress = extractTokenAddress(currentTab.url);
          if (tokenAddress) {
            setAddress(tokenAddress);
            checkHoneypot(tokenAddress);
          }
        } else {
          // If not on Uniswap, check if address is provided and check if it's a honeypot
          if (address) {
            checkHoneypot(address);
          }
        }
      }
    });
  }, [address]);

  const isUniswapUrl = (url) => {
    return url.includes("app.uniswap.org/explore/tokens/base/");
  };

  const extractTokenAddress = (url) => {
    const regex = /base\/(0x[a-fA-F0-9]{40})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <h1>HoneyPot Extension</h1>
        {address ? (
          <div>
            <h2>Token Address</h2>
            <p>{address}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="address">Enter Token Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                placeholder="Paste or type token address here"
                required
              />
            </div>
            <button type="submit">Check Honeypot</button>
          </form>
        )}

        {/* Display the token information */}
        {apiData && (
          <div>
            <h2>Contract Overview</h2>
            <p>Risk: {risk}</p>
            <p>Risk Level: {riskLevel}</p>
            <p>Token Name: {tokenName}</p>
            <p>Is Honeypot: {isHoneypot ? 'Yes' : 'No'}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default Popup;



