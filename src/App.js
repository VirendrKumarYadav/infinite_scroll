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
  const fetchApi = async () => {
    const apikey = "ijJDbmgiE-jfGZrmXxIQLiF589r_jBh32ED0cPD5gEc";
    const url =
      "https://api.unsplash.com/photos/random/?client_id=" +
      apikey +
      "&count=30";

    try {
      const response = await axios.get(url);
      setApi((oldRes) => [...oldRes, ...response.data]);

      localStorage.setItem("img-obj", JSON.stringify(response.data));
    } catch (error) {
      console.error("I got surprice !! " + error);
    }
  };
  const setFilerListData = (a) => {
    setFilerList(a);
  };

  //  scroll handle
  const handleInfiniteWindowScroll = () => {
    const scrollHeight_Crt =
      window.innerHeight + document.documentElement.scrollTop;
    // const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollHeight_Crt, scrollTop);
    const totalbodyHight = document.documentElement.offsetHeight
    if (totalbodyHight - scrollHeight_Crt < 100) {
      fetchApi()
    };
  }
  useEffect(() => {
    fetchApi();
    window.addEventListener("scroll", handleInfiniteWindowScroll);
     return () => {
       window.removeEventListener("scroll", handleInfiniteWindowScroll);
     };
    
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
