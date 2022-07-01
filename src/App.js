import "./App.css";
import logo from "./logo.png";
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="logo" />
          <span>dao king</span>
        </div>
        <div>
          <button>website</button>
          <button>connect</button>
        </div>
      </header>

      <section>
        <div className="leftBox">
          <h1>
            Stake Your <span>$Token</span> and earn 20% interest on staked token
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            blanditiis corporis natus reiciendis iure ab? Maxime voluptate
            provident cupiditate odio totam beatae, minima aut earum facilis
            laudantium iusto aspernatur quidem, sit quia.
          </p>
          <div className="cardsContent">
            <div className="cards">
              APY In Percentage
              <br />
              <span>24% APY</span>
            </div>
            <div className="cards">
              Current Token Price
              <br />
              <span>1.384 USDT</span>
            </div>
          </div>
        </div>

        <div className="rightBox">
          <div className="cardsContent">
            <div className="cards">
              Min Staking Amount
              <br />
              <span>50 USDT</span>
            </div>
            <div className="cards">
              Max Staking Amount
              <br />
              <span>500 USDT</span>
            </div>
          </div>
          <div className="controlBox">
            <table>
              <tr>
                <td>Your Wallet Address</td>
                <td>0x8D3f...9833</td>
              </tr>
              <tr>
                <td>Total Stakable Token</td>
                <td>53746 TOKEN</td>
              </tr>
              <tr>
                <td>Total Stakable Token in USD</td>
                <td>$532345</td>
              </tr>
              <tr>
                <td>Unstake Fee</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Lock Deadline</td>
                <td>30 Days</td>
              </tr>
              <tr>
                <td colspan="2">Pool Filled</td>
              </tr>
              <tr>
                <td colspan="2">
                  <div className="progressBar">45% Filled</div>
                </td>
              </tr>
              <tr>
                <td colspan="2">Stake Your Token</td>
              </tr>
              <tr>
                <td colspan="2">
                  <input type="text" placeholder="Enter Amount Of Token" />
                  <input type="submit" value="MAX" />
                </td>
              </tr>
            </table>
            <div className="cardsBtnContainer">
              <div className="cardsBtn">
                <button className="cardBtn">stake</button>
                <button className="cardBtn">unstake</button>
              </div>
              <button className="withdrawBtn">emergency withdraw</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
