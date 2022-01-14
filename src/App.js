import {useState, useEffect} from 'react';
import axios from 'axios';
import Home from './Screens/Home';
import Details from './Screens/Details';
import {BrowserRouter as Router,
    Routes,
   Route,
} from "react-router-dom";



function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(response.data);
            }catch(err){
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }else{
                    console.log(`Error: ${err.message}`);
                }
            }
        }
       fetchData();
    },[]);

  return (
          <Router>
              <Routes>
                  <Route exact path="/" element={<Home data={data}/>}/>
                  <Route path="details/:id" element={<Details data={data}/>}/>
                  <Route>
                  </Route>
              </Routes>
          </Router>
  );
}

export default App;
