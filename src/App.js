import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => (<Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Hompage />} />
                </Routes>
</Router>);

export default App;
