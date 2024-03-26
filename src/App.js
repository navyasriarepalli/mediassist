
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import {Why} from './components/WhyChooseUs';
import {Learn} from './components/Learning';
import {Kick} from './components/KickStart';
import {Place} from './components/Placements';
import './App.css';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/whychooseus" component={Why} />
        <Route exact path="/" component={Home} />
        <Route exact path="/learning" component={Learn} />
        <Route exact path="/placements" component={Place} />
        <Route exact path="/callback" component={Kick} />
        
      </Switch>
    </BrowserRouter>
  )
      
export default App;
