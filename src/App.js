import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from './components/Icon/Icon';
import Search from './components/Search/Search';
import Weather_today from "./components/Weathertoday/Weathertoday";
import Weather_tomorrow from "./components/Weathertomorrow/Weathertomorrow";
import sampleWeatherData from "./data/sampleWeatherData.json";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "Sana's Weather";

function App() {
  return (
    <div className="App">
      <Header title={siteTitle} />
      <Search />
      <main className="c-site-main" tabIndex="0">
      <Icon name="clear"/>
    
      </main>
      <Weather_today />
      <Weather_tomorrow />
      <Footer />
    </div>
  );
}

export default App;
data