const mcqs = [
    {
        id: 1,
        question: "What is the primary purpose of a blockchain?",
        options: ['Decentralization', 'Centralization', 'Encryption', 'None of the above'],
        answer: 'Decentralization'
    },
    {
        id: 2,
        question: "What consensus algorithm is commonly used in blockchain networks?",
        options: ['Proof of Authority', 'Proof of Stake', 'Proof of Work', 'None of the above'],
        answer: 'Proof of Work'
    },
    {
        id: 3,
        question: "Which blockchain platform introduced the concept of smart contracts?",
        options: ['Ethereum', 'Bitcoin', 'Ripple', 'None of the above'],
        answer: 'Ethereum'
    },
    {
        id: 4,
        question: "What is the purpose of a private key in blockchain technology?",
        options: ['Public verification', 'Access control', 'Network synchronization', 'None of the above'],
        answer: 'Access control'
    },
    {
        id: 5,
        question: "In blockchain, what does the term \"fork\" refer to?",
        options: ['Data storage', 'Network upgrade', 'Cryptocurrency exchange', 'None of the above'],
        answer: 'Network upgrade'
    },
    {
        id: 6,
        question: "What does the term \"double-spending\" mean in the context of blockchain?",
        options: ['Duplicating data on the blockchain', 'Spending the same cryptocurrency twice', 'Blockchain fork', 'None of the above'],
        answer: 'Spending the same cryptocurrency twice'
    },
    {
        id: 7,
        question: "Which cryptographic technique ensures the integrity of data in a block?",
        options: ['Hashing', 'Encryption', 'Compression', 'None of the above'],
        answer: 'Hashing'
    },
    {
        id: 8,
        question: "What role do miners play in the blockchain network?",
        options: ['Block creation', 'Transaction verification', 'Network administration', 'None of the above'],
        answer: 'Transaction verification'
    },
    {
        id: 9,
        question: "Which consensus algorithm is known for its energy efficiency?",
        options: ['Proof of Work', 'Proof of Burn', 'Proof of Stake', 'None of the above'],
        answer: 'Proof of Stake'
    },
    {
        id: 10,
        question: "What is the purpose of a Merkle tree in a blockchain block?",
        options: ['Data compression', 'Efficient search operations', 'Data integrity verification', 'None of the above'],
        answer: 'Data integrity verification'
    },
    {
        id: 11,
        question: "What is the term for the process of validating transactions and adding them to the blockchain?",
        options: ['Mining', 'Minting', 'Merging', 'None of the above'],
        answer: 'Mining'
    },
    {
        id: 12,
        question: "Which type of blockchain is permissionless and open to anyone?",
        options: ['Public blockchain', 'Private blockchain', 'Consortium blockchain', 'None of the above'],
        answer: 'Public blockchain'
    },
    {
        id: 13,
        question: "In blockchain, what is a \"hard fork\"?",
        options: ['Software bug', 'Irreconcilable split in the chain', 'Upgrading a node', 'None of the above'],
        answer: 'Irreconcilable split in the chain'
    },
    {
        id: 14,
        question: "What is the purpose of a \"nonce\" in blockchain mining?",
        options: ['Transaction verification', 'Proof of identity', 'Adjusting the difficulty of mining', 'None of the above'],
        answer: 'Adjusting the difficulty of mining'
    },
    {
        id: 15,
        question: "Which blockchain feature enhances privacy by obfuscating the sender, receiver, and transaction amount?",
        options: ['Zero-knowledge proofs', 'Transparent transactions', 'Byzantine fault tolerance', 'None of the above'],
        answer: 'Zero-knowledge proofs'
    },
    {
        id: 16,
        question: "What is the role of a \"block explorer\" in the blockchain ecosystem?",
        options: ['Cryptocurrency exchange', 'Monitoring transactions and blocks', 'Smart contract execution', 'None of the above'],
        answer: 'Monitoring transactions and blocks'
    },
    {
        id: 17,
        question: "Which consensus algorithm aims to achieve agreement through a voting process?",
        options: ['Practical Byzantine Fault Tolerance (PBFT)', 'Delegated Proof of Stake (DPoS)', 'Proof of Burn', 'None of the above'],
        answer: 'Practical Byzantine Fault Tolerance (PBFT)'
    },
    {
        id: 18,
        question: "What is the primary purpose of a \"genesis block\" in a blockchain?",
        options: ['Initial cryptocurrency distribution', 'First block in the chain', 'Smart contract deployment', 'None of the above'],
        answer: 'First block in the chain'
    },
    {
        id: 19,
        question: "What is the maximum supply of bitcoins that can ever exist?",
        options: ['21 million', '100 million', '1 billion', 'None of the above'],
        answer: '21 million'
    },
    {
        id: 20,
        question: "What is the key difference between a soft fork and a hard fork in blockchain technology?",
        options: ['Reversible vs. irreversible changes', 'Upgrade vs. bug fix', 'Increase vs. decrease in block size', 'None of the above'],
        answer: 'Reversible vs. irreversible changes'
    },
    {
        id: 21,
        question: "Which term describes the process of converting data into a fixed-size string of characters in blockchain?",
        options: ['Sharding', 'Hashing', 'Tokenization', 'None of the above'],
        answer: 'Hashing'
    },
    {
        id: 22,
        question: "In a blockchain network, what is the purpose of the \"mempool\"?",
        options: ['Storage of historical transactions', 'Pending transactions awaiting confirmation', 'Permanent storage of validated blocks', 'None of the above'],
        answer: 'Pending transactions awaiting confirmation'
    },
    {
        id: 23,
        question: "What consensus algorithm does the Binance Smart Chain (BSC) primarily use?",
        options: ['Proof of Stake', 'Proof of Burn', 'Delegated Proof of Stake (DPoS)', 'None of the above'],
        answer: 'Delegated Proof of Stake (DPoS)'
    },
    {
        id: 24,
        question: "What is the role of the \"gas limit\" in Ethereum transactions?",
        options: ['Transaction speed', 'Cost estimation', 'Security verification', 'None of the above'],
        answer: 'Cost estimation'
    },
    {
        id: 25,
        question: "What is a \"51% attack\" in the context of blockchain?",
        options: ['Network failure', 'Majority control over consensus', 'A common bug exploit', 'None of the above'],
        answer: 'Majority control over consensus'
    }
];


module.exports = mcqs;
