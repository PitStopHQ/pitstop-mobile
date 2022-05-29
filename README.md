# Pit Stop - Mobile 
Pit Stop is a web3 Formula1 fantasy game application where players can build their virtual garages by minting F1 cars as NFTs and compete with others by wagering these NFT cars on real life F1 races.

## Problem it solves ⚒
The world of fantasy sports is awesome. With Pit Stop, we made it even better by integrating fantasy F1 with web3. Players can create their own car garage in the metaverse, mint F1 cars as NFTs on the Polygon blockchain, and wager them on drivers from real life F1 Grand Prix. They can then compete with other players by scoring points on the basis of results of real life F1 races which will make their cars more valuable, and move their garage up on the global leaderboard. Players can also buy/sell/trade these cars among each other via our in-app marketplace, making their way to the top. Pit Stop is currently deployed on the Polygon Mumbai Testnet for anyone to get started with test MATIC tokens!
We started building Pit Stop in ETHIndia's Ethernals hackathon and we were only able to build a web app which was being used to conduct all our test run. But, since most people prefer mobile first applications, we thought it would be really nice to make Pit Stop available as a phone application as well. Hence, at warpspeed, we built the mobile version of Pit Stop.

Work done before Warpspeed:
- Only the web app of Pit Stop existed before on which people used to come and back their favorite drivers and constructors. We didn't even have a m-web version of it.

Work done at Warpspeed:
- Designed the complete mobile application from scratch during the hackathon hours.
- Coded out all the designs and brought the mobile application to life during the hackathon hours.

## How does it work ❓
- Players start by building their own car garage in the metaverse, by minting F1 cars of different liveries as NFTs on the Polygon blockchain.
- These NFT cars have an initial points attribute equal to 0 (zero) and can be wagered on one driver during each real life F1 Grand Prix.
- After the race, each NFT is updated with the number of points scored by the driver(calculated by our algorithm) in the Grand Prix.
- The more points a player racks up, the more valuable the NFT becomes, and the higher they move up the global leaderboard.
- Players can also buy and sell these NFT cars at any given time on the in-app marketplace, essentially trading some MATIC for points.


## How are NFT points calculated❓
- We have developed an algorithm to calculate points after every race, which takes into consideration a number of different factors, each with a different weightage in the final points.
- In decreasing order of weightage, they are:
- Final race standing, of course.
- Difference from starting grid position.
- Fastest lap time in main race.
- Q3 lap time.
- Q2 lap time.
- Q1 lap time. 
- All lap times for every driver are judged relative to other drivers.

## Challenges we ran into 🔴
- The very first challenge was building this whole thing out within 24hrs. We created the web app within a week back then. Even with a little bit of prior knowledge, on paper, it was very difficult to finish the application with the designs and everything within 24hrs but we still wanted to do it and see how far we could push ourselves to build this thing out.
- This was only our second project using React native hence it was a bit difficult navigating through some errors and issue but we eventually found our way around these issues and made it work.
- It took some time to figure out the wallet connect  protocol to connect the meta mask wallet to the mobile application but we were able to get this to work as well.

## Built Using 🚀
We built the platform using the following tech stack - Solidity, IPFS, React native, ethers.js, Firebase, Hardhat, Polygon, Redux, Alchemy and Figma

## Design 🎨
You can find the designs for the application using the following link - [Figma File](https://www.figma.com/file/4WRAoe3uvrPf9jTRDhlpXe/Pit-Stop?node-id=423%3A13)
