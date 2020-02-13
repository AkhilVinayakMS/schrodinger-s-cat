<b>Distributed Voting Application</b>

Created a decentralised voting application on Ethereum 
[This is an absolute link to a nested folder](https://notebooks.azure.com/anon-jhu4eq/libraries/ReadmeLinkingTest/tree/testfolder)
Instructions to try & use the application:

<h1>Step 1</h1>
Clone the project
<br/>
<h4><i> $ git clone https://github.com/AkhilVinayakMS/schrodinger-s-cat.git </h4></i>
<br/>
<h1>Step 2.</h1>

Install dependencies

<h4><i>$ npm install </h4></i>


<h1>Step 3.</h1>
  
 Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.
In order to start Ganache in quiet mode, use

 <h4><i>$ ganache-cli --q</h4></i>

<h1>Step 4.</h1>

Compile & Deploy Election Smart Contract

<h4><i>$ truffle migrate --reset </h4></i>
  
You must migrate the election smart contract each time your restart ganache.

<h1>Step 5.</h1> 

Configure Metamask
Ignore if already done

Unlock Metamask
Connect metamask to your local Etherum blockchain provided by Ganache.
Import an account provided by ganache.

<h1>Step 6.</h1> 
Run the Front End Application
<h4><i> $ npm run dev  </h4></i>
Visit this URL in your browser:
                          http://localhost:3000
                          
                          
                          
                        Dont get Confused with the name of repo. Just thought of giving a cool name :p 
    






