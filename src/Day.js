import  "./day.css"

export default function Day() {
  const current = new Date();
  const date = `${current.getDate()}`;
  const monthn = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[current.getDay()];
  let mon = monthn[current.getMonth()];
  return (
    <>
    <div className="">
    <div className="bigDay">
        {day.toUpperCase()}, {date}  {     mon}      
    </div>
    <div className=" md-3">
                 
       {/* <Date/> */}
    </div>
    </div>
    </>
  )
}
