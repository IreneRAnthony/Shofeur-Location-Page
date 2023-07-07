import './App.css';

// Component Imports
import LocationMap from './components/LocationMap';
import LocationInfo from './components/LocationInfo';
import VehicleOptions from './components/VehicleOptions';
import Carousel from './components/Carousel';
import Divider from './components/Divider';


// Usually this would be a series of routes for each constructed page, but for ease of access it's just the one
function App() {
  return (
    <div className="App">
      <div className='flex flex-wrap'>
        <div>
          <div className="max-w-2xl m-auto">
            <LocationMap />
          </div>
          <div className='border-2 border-slate-300 rounded-md m-auto w-4/5 p-2'>
            <LocationInfo />
          </div>
        </div>
        <div className='container w-1/2 h-1/2 m-auto'>
          <Carousel />
        </div>
          <Divider text="Available Cars" />
        <div>
          <VehicleOptions />
        </div>
      </div>
    </div>
  );
}

export default App;
