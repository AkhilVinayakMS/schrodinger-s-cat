<b>Distributed Voting Application</b>

Created a decentralised voting application on Ethereum 

Instructions to try & use the application:

<h1>Step 1</h1>
Clone the project
$ git clone https://github.com/AkhilVinayakMS/schrodinger-s-cat.git

<h1>Step 2.</h1>

Install dependencies

$ npm install


<h1>Step 3.<h1>
  
 Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.
In order to start Ganache in quiet mode, use

$ ganache-cli --q

<h1>Step 4.</h1>

Compile & Deploy Election Smart Contract

$ truffle migrate --reset You must migrate the election smart contract each time your restart ganache.

<h1>Step 5.</h1> 

Configure Metamask
Ignore if already done

Unlock Metamask
Connect metamask to your local Etherum blockchain provided by Ganache.
Import an account provided by ganache.

<h1>Step 6.</h1> 
Run the Front End Application
$ npm run dev Visit this URL in your browser:
                          http://localhost:3000
