
const Benefite = ( props ) =>{
  return (
    <div>
      <div className="card-text-data bg-gray-200 p-5">
        <img className="mb-5" alt="icon" src={props.imgsrc} />
        <h3 className="font-semibold text-xl mb-5">{props.title}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  )
}

export default Benefite;