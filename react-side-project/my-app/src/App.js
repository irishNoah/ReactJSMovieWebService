import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null); // 선택한 코인을 보유하고 있는 상태

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // 드롭다운에서 새 코인을 선택할 때 처리하는 기능
  const handleSelectChange = (event) => {
    const coinId = event.target.value; // 선택 옵션 값에서 코인 ID를 가져오기
    const coin = coins.find((coin) => coin.id === coinId); // ID를 기준으로 선택한 코인을 찾기
    setSelectedCoin(coin); // 선택한 코인 상태 설정
  };

  return (
    <div>
      <h1>The number of coins is {loading ? 0 : `${coins.length}`}</h1>
      {loading ? (
        <h2>Coins Page is now loading...</h2>
      ) : (
        <div>
          <label>Choose Coin!</label>
          <br />
          <select onChange={handleSelectChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option> // coin.id를 키와 값으로 사용
            ))}
          </select>
          {selectedCoin && ( // 선택한 코인이 있는지 확인하고 해당 코인의 세부정보를 표시
            <p>
              Selected Coin: {selectedCoin.name} <br />
              Symbol:{selectedCoin.symbol} <br />
              total_supply : {selectedCoin.total_supply} <br />
              first_data_at : {selectedCoin.first_data_at} <br />
              USD price : {selectedCoin.quotes.USD.price}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
