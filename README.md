# 🔮 Vanga App - Mystical Color Oracle 🔮

<div align="center">

![Vanga App](https://img.shields.io/badge/Vanga%20App-v1.0.0-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![FHEVM](https://img.shields.io/badge/FHEVM-Encrypted-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)

**A privacy-preserving color prediction game powered by Fully Homomorphic Encryption (FHEVM)**

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Deployment](#-deployment) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Configuration](#-configuration)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Vanga App** is an innovative blockchain-based color prediction game that leverages **Zama's FHEVM (Fully Homomorphic Encryption Virtual Machine)** technology to ensure complete privacy while playing. Unlike traditional games where your choices are visible on-chain, Vanga App encrypts your predictions using homomorphic encryption, allowing the smart contract to compare your encrypted guess with the encrypted answer without ever revealing your choice.

### How It Works

1. **Encrypted Submission**: Your color prediction is encrypted on the client side before being sent to the blockchain
2. **Homomorphic Comparison**: The smart contract performs encrypted comparisons without decrypting any data
3. **Decryption on Demand**: Only you can decrypt and view your results, ensuring complete privacy
4. **Fair Gameplay**: The system uses cryptographic proofs to ensure game integrity

---

## ✨ Features

### 🔒 Privacy Features
- **Full Encryption**: All user predictions are encrypted before submission
- **Zero-Knowledge Gameplay**: Your choices remain private until you decide to decrypt
- **On-Chain Privacy**: FHEVM enables computations on encrypted data

### 🎮 Game Features
- **Simple Gameplay**: Predict the randomly generated color to win rewards
- **Real-Time Results**: Instant feedback after submitting your guess
- **Transparent Rewards**: Clear fee structure and win rewards displayed upfront
- **Multi-Color Support**: Configurable number of colors (default: 6-8)

### 💻 Technical Features
- **Modern UI/UX**: Dark, mystical theme with smooth animations
- **Mobile Responsive**: Fully optimized for all device sizes
- **Wallet Integration**: Seamless MetaMask integration
- **Multi-Chain Support**: Deployable on any EVM-compatible network
- **TypeScript**: Fully typed for better developer experience

---

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 4
- **Fonts**: Poppins & Montserrat
- **Blockchain**: Ethers.js 6
- **TypeScript**: 5.4+

### Smart Contracts
- **Language**: Solidity
- **Framework**: Hardhat
- **Encryption**: Zama FHEVM Plugin
- **Standards**: OpenZeppelin Contracts

### Infrastructure
- **Package Manager**: npm
- **Version Control**: Git
- **Deployment**: Vercel (Frontend), Hardhat Deploy (Contracts)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20 LTS or higher (minimum 18)
- **npm**: Version 8+ (or yarn/pnpm)
- **Git**: Latest version
- **MetaMask**: Browser extension for wallet connectivity
- **Code Editor**: VS Code recommended

### Optional
- **Foundry/Anvil**: For local development (alternative to Hardhat node)
- **Infura/Alchemy Account**: For deploying to testnets/mainnet

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vanga-app
```

### 2. Install Dependencies

From the root directory:

```bash
npm install
```

This will install dependencies for both the root project and the frontend workspace.

### 3. Verify Installation

```bash
# Check Node version
node --version  # Should be 18+ (20 LTS recommended)

# Verify Hardhat
npx hardhat --version

# Verify Next.js (from frontend directory)
cd frontend && npx next --version
```

---

## ⚡ Quick Start

### Local Development Setup

#### Step 1: Start Local Blockchain

In the root directory, start a Hardhat node:

```bash
npx hardhat node
```

This starts a local Ethereum node on `http://localhost:8545` with 20 pre-funded accounts.

**Keep this terminal running!**

#### Step 2: Deploy Contracts

In a new terminal (from root directory):

```bash
npx hardhat deploy --network localhost
```

This deploys the `ColorGuess` contract to your local node.

#### Step 3: Generate Frontend ABI

After deployment, generate the TypeScript ABI files:

```bash
npx ts-node scripts/generate-abi.ts
```

This creates:
- `frontend/src/abi/ColorGuessABI.ts`
- `frontend/src/abi/ColorGuessAddresses.ts`

#### Step 4: Start Frontend

```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:3001`

#### Step 5: Connect MetaMask

1. Open your browser and navigate to `http://localhost:3001`
2. Install MetaMask if you haven't already
3. Add the local network:
   - Network Name: `Localhost 8545`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency Symbol: `ETH`
4. Import a test account from the Hardhat node output (use the private key)
5. Connect your wallet in the app

#### Step 6: Play!

1. Click "Connect Wallet" if not already connected
2. Click "Start New Game" and approve the transaction
3. Select your predicted color
4. Wait for transaction confirmation
5. Click "Decrypt Last Result" to see if you won!

---

## 📁 Project Structure

```
vanga-app/
├── contracts/                 # Smart contracts
│   └── ColorGuess.sol       # Main game contract
├── deploy/                   # Deployment scripts
│   └── deploy.ts            # Hardhat deploy configuration
├── deployments/              # Deployment artifacts
│   ├── localhost/           # Local deployments
│   └── sepolia/             # Sepolia testnet deployments
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/            # Next.js app router
│   │   │   ├── page.tsx   # Main game page
│   │   │   ├── layout.tsx # Root layout
│   │   │   └── globals.css # Global styles
│   │   ├── abi/            # Generated contract ABIs
│   │   ├── components/     # React components
│   │   ├── fhevm/          # FHEVM integration
│   │   └── hooks/          # Custom React hooks
│   └── package.json
├── scripts/                  # Utility scripts
│   ├── generate-abi.ts     # ABI generation script
│   └── genabi.mjs          # Alternative ABI generator
├── hardhat.config.ts        # Hardhat configuration
├── package.json             # Root package.json
└── README.md               # This file
```

---

## 🏗 Architecture

### Smart Contract Flow

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       │ 1. startGame() + fee
       ▼
┌─────────────┐
│  Contract   │ Generate encrypted target
│             │ Store game state
└──────┬──────┘
       │
       │ 2. guess(encryptedChoice, proof)
       ▼
┌─────────────┐
│  Contract   │ Homomorphic comparison
│             │ Store encrypted result
│             │ Request decryption
└──────┬──────┘
       │
       │ 3. Oracle decrypts result
       ▼
┌─────────────┐
│  onDecrypt() │ Verify decryption
│             │ Distribute rewards
│             │ Update statistics
└─────────────┘
```

### Frontend Architecture

```
┌─────────────────────────────────┐
│      Next.js App Router         │
├─────────────────────────────────┤
│  page.tsx (Main Game UI)        │
│  ├── useColorGuess()           │
│  ├── useFhevm()               │
│  └── Wallet Connection         │
├─────────────────────────────────┤
│  Hooks Layer                    │
│  ├── useColorGuess.tsx        │  ← Game logic
│  └── useFhevm.tsx             │  ← FHEVM instance
├─────────────────────────────────┤
│  FHEVM Integration             │
│  ├── FhevmDecryptionSignature  │
│  ├── RelayerSDKLoader         │
│  └── GenericStringStorage      │
├─────────────────────────────────┤
│  Blockchain Layer              │
│  ├── Ethers.js                │
│  └── Contract ABI             │
└─────────────────────────────────┘
```

### Key Components

1. **ColorGuess.sol**: Core game contract implementing FHE-based comparison
2. **useFhevm.tsx**: Manages FHEVM instance (auto-switches between mock and SDK)
3. **useColorGuess.tsx**: Game state management and contract interactions
4. **page.tsx**: Main UI with wallet connection and game controls

---

## 📖 Usage

### Starting a New Game

1. Ensure your wallet is connected and has sufficient ETH
2. Click "Start New Game"
3. Approve the transaction in MetaMask
4. Wait for confirmation (transaction includes participation fee)

### Making a Prediction

1. After starting a game, the color palette will appear
2. Click on your predicted color
3. The app will:
   - Encrypt your choice using FHEVM
   - Submit the encrypted guess to the contract
   - Trigger the homomorphic comparison
4. Wait for transaction confirmation

### Viewing Results

1. After your guess transaction is confirmed, click "Decrypt Last Result"
2. The app will:
   - Sign a decryption request
   - Call the FHEVM relayer (or local mock) to decrypt
   - Display whether you won or lost

### Game Parameters

Default configuration:
- **Number of Colors**: 6-8 (configurable)
- **Participation Fee**: 0.001 ETH
- **Win Reward**: 0.0015 ETH
- **Protocol Fee**: 1% (100 bps)

---

## 🚢 Deployment

### Deploy to Sepolia Testnet

#### 1. Configure Environment Variables

```bash
# Set your mnemonic (12/24 word phrase)
npx hardhat vars set MNEMONIC "your twelve word mnemonic phrase here"

# Set your Infura API key (or use Alchemy)
npx hardhat vars set INFURA_API_KEY "your-infura-project-id"
```

#### 2. Deploy Contract

```bash
npm run deploy:sepolia
```

#### 3. Generate Frontend ABI

```bash
npx ts-node scripts/generate-abi.ts
```

#### 4. Update Frontend

The frontend will automatically use the correct contract address based on the connected chain ID.

### Deploy Frontend to Vercel

#### Option 1: Vercel CLI

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

#### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Set root directory to `frontend`
6. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
7. Deploy!

#### Environment Variables (if needed)

In Vercel dashboard, add:
- `NEXT_PUBLIC_NETWORK`: `sepolia` (or your network)
- Any other public variables your app needs

### Deploy to Other Networks

To deploy to a different network:

1. Add network configuration to `hardhat.config.ts`
2. Add network-specific deployment config in `deploy/deploy.ts`
3. Deploy:
   ```bash
   npx hardhat deploy --network <network-name>
   ```
4. Generate ABI and update frontend as above

---

## ⚙️ Configuration

### Smart Contract Configuration

Contract parameters can be updated by the owner:

```solidity
function setConfig(
  uint8 _numColors,           // Number of available colors
  uint256 _participationFee,  // Entry fee in wei
  uint256 _rewardOnWin,       // Reward amount in wei
  uint16 _protocolFeeBps,    // Protocol fee basis points (100 = 1%)
  address _treasury           // Fee recipient address
) external onlyOwner;
```

### Frontend Configuration

Key configuration files:

- `frontend/next.config.mjs`: Next.js configuration
- `frontend/tailwind.config.js`: Tailwind CSS customization
- `frontend/src/abi/ColorGuessAddresses.ts`: Contract addresses per network

### Network Configuration

Edit `hardhat.config.ts` to add custom networks:

```typescript
networks: {
  yourNetwork: {
    url: "YOUR_RPC_URL",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: YOUR_CHAIN_ID,
  }
}
```

---

## 🔧 Troubleshooting

### Common Issues

#### Frontend Can't Connect to Local Node

**Problem**: Frontend shows "No contract found" or connection errors

**Solutions**:
- Ensure `npx hardhat node` is running
- Verify MetaMask is connected to `Localhost 8545`
- Check that chain ID is `31337`
- Verify contract was deployed: check `deployments/localhost/ColorGuess.json`

#### Transaction Fails with "Insufficient Funds"

**Problem**: MetaMask shows insufficient balance error

**Solutions**:
- Import one of the test accounts from Hardhat node output
- Verify the account has ETH (should have 10000 ETH by default)
- Check that you're on the correct network

#### FHEVM Decryption Not Working

**Problem**: Decrypt button doesn't work or shows errors

**Solutions**:
- Check browser console for errors
- Verify FHEVM instance is initialized (check status badge)
- For local development, ensure mock mode is enabled (auto-enabled for chain 31337)
- For public networks, ensure relayer is properly configured

#### ABI Generation Fails

**Problem**: `generate-abi.ts` script throws errors

**Solutions**:
- Ensure contracts are deployed first (`deployments/` folder exists)
- Check that `ColorGuess.json` exists in target network folder
- Verify TypeScript can compile: `npx tsc --noEmit`

#### Build Errors on Vercel

**Problem**: Vercel deployment fails

**Solutions**:
- Check build logs for specific errors
- Ensure `package.json` has correct Node version: `"engines": { "node": "20.x" }`
- Verify all dependencies are in `dependencies`, not `devDependencies` (for production)
- Check that `NEXT_PUBLIC_*` variables are set in Vercel dashboard

### Debug Mode

Enable verbose logging:

```typescript
// In frontend/src/hooks/useColorGuess.tsx
console.log('Game params:', params);
console.log('Contract address:', cg.address);
console.log('FHEVM instance:', instance);
```

### Getting Help

- Check browser console for error messages
- Review Hardhat node logs for contract events
- Verify MetaMask transaction logs
- Check FHEVM relayer logs (if using public network)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly (local + testnet)
5. Commit: `git commit -m "Add amazing feature"`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Add comments for complex logic
- Write descriptive commit messages

### Testing Checklist

- [ ] Test on local Hardhat node
- [ ] Test on Sepolia testnet
- [ ] Verify mobile responsiveness
- [ ] Check all wallet connection flows
- [ ] Test with different browsers (Chrome, Firefox, Brave)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Zama** for the FHEVM technology
- **Hardhat** team for the excellent development framework
- **Next.js** team for the amazing React framework
- **OpenZeppelin** for secure smart contract libraries

---

## 📞 Support

For questions, issues, or contributions:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

<div align="center">

**Built with 🔒 Privacy and ❤️ Passion**

Made with [Next.js](https://nextjs.org) • [FHEVM](https://docs.zama.ai/fhevm) • [Hardhat](https://hardhat.org)

</div>
