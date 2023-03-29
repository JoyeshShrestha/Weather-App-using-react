import React from 'react'


import './day.css'



function Degree(props) {
  // const[data,setData]=useState([]);
  // const[location,setLocation]=useState("");
  // const apiGet= ()=>{
  //   axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d7b96792fae3a3fae5989bc4d585b12&units=metric ')
  //   .then(res =>{
  //     console.log(res.data)
  //     setData(res.data.main.temp)
  //     setLocation(res.data.name)
  //   }).catch(err=> {
  //     console.log(err)
  //   })
  // }
  //   // const apiGet = () => {
  //   //     fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d7b96792fae3a3fae5989bc4d585b12")
  //   //     .then((response)=>response.json())
  //   //     .then((json)=>{
  //   //         console.log(json);
  //   //         setData(json);
  //   //     })
  //   // }
  //   useEffect(()=>{

  //       apiGet();
  //   },[]);
    
  return (
    <>
 
    <div className='mt-5 deg ' >
    {/* {data.map(item =>
                <><p key={item.id}>{item.main.temp}</p></>
                )} */}
                {/* {data.main.temp} */}

                {props.cell}
                
  

    </div>
    
   
  </>)
}

export default Degree
