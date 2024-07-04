



const ContactCard=(props)=>{
return(
    <div>
        <div className="contact-card bg-gray-200 p-5">
            <img className="w-8 mb-2" src={props.image}/>
            <h2 className="font-semibold text-2xl mb-2 mt-2">{props.name}</h2>
            <p className="mb-3">{props.detail}</p>
        </div>
    </div>
)
}
export default ContactCard;