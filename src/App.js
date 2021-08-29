import './App.css';
import BFXReward from './Components/BFXReward';
import CryptoDerivatives from './Components/CryptoDerivatives';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Image1 from './Components/Image1';
import Image2 from './Components/Image2';
import Image3 from './Components/Image3';
import Image4 from './Components/Image4';
import Image5 from './Components/Image5';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import Steps from './Components/Steps';
import WhyBitfix from './Components/WhyBitfex';

import steps from './images/7.png';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="App__">
        <div className="App__left">
          <CryptoDerivatives />
          <img src={steps} className="App__image" />
          <Steps title="REGISTER" line="Sign-up for your free account in less than a minute." number="1" />
          <Steps title="DEPOSIT" line="Find your account by depositing USDT." number="2" />
          <Steps title="TRADE" line="Make your first rade." number="3" />
        </div>
        <div className="App__right"><Main /></div>
      </div>
      <div className="App__1">
        <WhyBitfix title="Why Bitfex?" para={'Bitfex is a P2P crypto products trading platform, providing traders a diverse range of crypto contracts\nand a highly secure & intuitive trading interface, powered by institutional grade infrastructure. Built by\nveteran traders and supported by a diverse community of VCs. Traders and investorsfrom both traditional\nand crypto space.'} />
        <div className="description__">
          <div className="description__1">
            <div className="description__box">
              <Image1 />
              <Description title="Unique Trading Products" para={"First to launch Exchange Quoted Spreadswhich dramatically\nreduce execution risk in volatile markets."} />
            </div>
            <div className="description__box">
              <Image2 mode={"thumbs"} />
              <Description title="TRADE MINING" para={"Earn rewards on the fees you pay as per trade volume."} />
            </div>
          </div>
          <div className="description__1">
            <div className="description__box">
              <Image2 mode={"wallet"} />
              <Description title="Maximum Security" para={"Funds stored in multi-signature deep cold storage. Insurance\nFund from Day 1."} />
            </div>
            <div className="description__box">
              <Image2 mode={"bulb"} />
              <Description title="INTUITIVE INTERFACE" para={"Easy-to-use, highly customisable and trader-friendly\nplatform."} />
            </div>
          </div>
        </div>
        <WhyBitfix title="Services" para={''} />
        <div className="description__">
          <div className="description__1s">
            <div className="description__box">
              <Image5 />
              <Description title="PERPECTUAL" para={"Easy-to-use, non-expiring crypto\nderivatives contracts."}><p className="readMore__"><span>R</span>ead more</p></Description>
            </div>
            <div className="description__box">
              <Image4 />
              <Description title="Futures" para={"Cash-settled derivatives contracts for\ngoing long or short on future\ncyrptocurrency prices."}><p className="readMore"><span>R</span>ead more</p></Description>
            </div>
          </div>
          <div className="description__1s">
            <div className="description__box">
              <Image3 />
              <Description title="Exchange-Quoted Spreads" para={"Low-risk trading instruments to easily trade\nthe price difference of underlying futures\nand perpectual contracts."}><p className="readMore"><span>R</span>ead more</p></Description>
            </div>
          </div>
        </div>
        <WhyBitfix title="BFX" para={'BFX is the ERC-20 utility token powering the Bitfex Ecosystem. Integral to the exchange, the BFX deman\nis fuelled by the various utilities it provides to its holders and its diminishing circulating\nsupply.'} />
        <BFXReward />
        <Footer />
      </div>
    </div>
  );
}

export default App;
