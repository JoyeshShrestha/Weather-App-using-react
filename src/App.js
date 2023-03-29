import Day from './Day';
import Degree from './Degree';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Location from './Location'
import Outside from './Outside';
import './day.css';
import './toggle.css';


function App() {

  const[data,setData]=useState([]);
  const[search,setSearch]=useState("");
  const[s,setS]=useState("london")
  const[location,setLocation]=useState("");
  const[outside,setOutside]=useState("");
  const[main,setMain]=useState("");
  const[out,setOut]=useState("");
  const[country,setCountry]= useState("");
  const[humili,setHumili]= useState();
  const[toggle,setToggle]= useState("metric");
  const[tim,setTim]= useState("")
  const apiGet = ()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${s}&APPID=2d7b96792fae3a3fae5989bc4d585b12&units=${toggle}` )
    .then(res =>{
      console.log(res.data)
      setData(res.data.main.temp)
      setLocation(res.data.name)
      setCountry(res.data.sys.country)
      setOutside(res.data.main.feels_like)
      setOut(res.data.weather[0].description)
      setMain(res.data.weather[0].main)
      setHumili(res.data.main.humidity)
      
    }).catch(err=> {
      console.log(err)
    })
  }

  const apiTime= ()=>{
    axios.get(`https://api.ipgeolocation.io/timezone?apiKey=API_KEY&location=${s},20%${country}` )
    .then(res =>{
      console.log(res.data)
      setTim(res.time_12)
      
    }).catch(err=> {
      console.log(err)
    })
  }
    // const apiGet = () => {
    //     fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d7b96792fae3a3fae5989bc4d585b12")
    //     .then((response)=>response.json())
    //     .then((json)=>{
    //         console.log(json);
    //         setData(json);
    //     })
    // }

    useEffect(()=>{
        apiGet();
        apiTime();
    });

    const handleOnChange = (event) =>{
      console.log("On change");
      setSearch(event.target.value);//Text lekhirakhna
  }
  const handleOnClick= ()=>
  {
  let newText= search;
  setS(newText);
  
  }
  
  const change= ()=>
  {
  let okok= "metric"
  if(okok === "metric"){
    setToggle("imperial");
  }
  if(okok === "imperial"){
    setToggle("metric");
  }
  
  }
  //   const ok = () =>{
  //   const name = search.current.value
  //     setSearch(name)
      
  
  // }

  return (
    <>
    <div className="container-fluid">
      <div className="row ">
        <div className="col container">
        
        {/* <label class="switch text-center  ms-4">
  <input type="checkbox" onChange={change}/>
  <span class="slider round"></span>
      </label> */}
        </div>
        
        <div className="col text-center">
        
        </div>
        <div className=" col container ms-5 ">
        <div class="input-group row ms-5">
          <div className="col-3"></div>
              <div id="search-autocomplete" class="form-outline col-5">
                <input type="text" value={search} onChange={handleOnChange} placeholder="Search" id="form1" class="form-control" />
                
              </div>
              <button type="button" onClick={handleOnClick} class="col-2 btn btn-info but text-white">
                GO
              </button>
              </div>
        </div>    
      </div>  



    </div>
    
    
    <div className="container">
      <div className="row my-5">
      <div className="col-5 ">
      <Day/>
      <Location name={data ? <p>{location}, {country}</p> : null}/>
      {data ? <p>{tim}</p> : null}
      <p className="position-absolute bottom-0 start-10 "><Degree cell = {data ? <p>{data}°C</p> : null} />
      </p>
      
      </div>
      <div className="col-1"></div>
      <div className="col-3 mt-5">
      
      </div>
      <div className="col-3 border border-info rounded-4 borderglow whi">
      <Outside out={data ? <p>feels like {outside}°C</p> : null} feels={data ? <p> {out}</p> : null}  humul={data ? <p className='mt-2 text-uppercase text-bold'> Humidity    {humili}</p> : null} around= {data ? <p>{main}</p> : null}/>
      
      </div>
      
      </div></div>
    </>
  );
}

export default App;
