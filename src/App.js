import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import axios from "axios";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${lotation}&appid=${API_KEY}`;
  const API_KEY = "614f734515b5ebb1a40e59ef2c368a27";

  const {lotation, setLotation} = useState("");

  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get'
          url: url
        })
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
        placeholder="도시를 입력하세요"
        value={lotation}
        onChange={(e) =>
          setLotation(e.target.value)
        }
        type="text"
        onKeyDown={searchWeather}
        >
        </input>
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px blue solid;
    padding: 20px;
  }
`;