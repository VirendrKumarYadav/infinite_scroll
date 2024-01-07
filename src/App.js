import React, {useEffect,useState } from 'react'
import axios from "axios";
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Section from './component/Section/Section';




const App = () => {
  const [getApi, setApi] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [filerList, setFilerList] = useState(getApi);
  // fetch API endpoint
  const fetchApi = async() => {
    const apikey = "XipJ1gjLBiWAwhCDh3PvmJWJd_3yWzxGHDZ9m_YUUQE";
    const url =
      "https://api.unsplash.com/photos?client_id=" +
      apikey +
      "&page=" + pageNo;
    
    try {
      const response = await axios.get(url);
      setApi(response.data);
      setFilerList(response.data);
      localStorage.setItem("img-obj", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      
    }
  };
  const setFilerListData = (a) => {
    setFilerList(a)
}
  useEffect(() => {
    fetchApi();
  }, [pageNo]);

  return (
    <div>
      <Header list={filerList} setList={setFilerListData} />
      <Section api_data={getApi} loadMore={setPageNo} />
      <Footer />
    </div>
  );
}

export default App
