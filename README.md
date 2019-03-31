<b>Distributed Voting Application</b>

Created a decentralised voting application on Ethereum 

Instructions to try & use the application:

Step 1. Clone the project
$ git clone https://github.com/AkhilVinayakMS/schrodinger-s-cat.git

Step 2. Install dependencies
$ npm install
Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.
In order to start Ganache in quiet mode, use
$ ganache-cli --q

Step 4. Compile & Deploy Election Smart Contract
$ truffle migrate --reset You must migrate the election smart contract each time your restart ganache.

Step 5. Configure Metamask
Ignore if already done

Unlock Metamask
Connect metamask to your local Etherum blockchain provided by Ganache.
Import an account provided by ganache.
Step 6. Run the Front End Application
$ npm run dev Visit this URL in your browser: http://localhost:3000
