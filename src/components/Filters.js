import "../main.css"
function Filters() {
    return (
      <div className="d-flex flex-collumm gap-6 filter-position">
        <ul className="min-h-fit">
        <li className="p-2 ms-5">
            <span className="font-bold">Filters & Sort <span className="ms-2 font-extrabold"></span></span>
        </li>
        <li className="p-2 border-t-2 d-flex">
        <div class="mr-1" style={{width:"25px", height:"25px"}}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></div>
            <span style={{minWidth: "100%"}}> Sort By <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Distance & Shipping <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Make <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Body Type <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Fuel Type <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Year <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Price <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Mileage <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Featuers <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Exterior Color <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Interior Color <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Transmission <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Cylinders <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>MPG Hightway <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        <li className="p-2 border-t-2">
            <span style={{minWidth:"100%"}}>Advanced Search <span className="ms-2 font-extrabold float-right">></span></span>
        </li>
        </ul>
      </div>
    )
  }
  
  export default Filters;