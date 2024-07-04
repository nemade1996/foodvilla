import contactimg from "../img/contact.png";
import ContactData from "../utils/ContactData";
import ContactCard from "./ContactCard";

const Contact =()=>{

    // console.log(ContactData)

    // {name,image,detail}=ContactData;
        
    return(
        <div>
             <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-20">
                    <div className="flex gap-4">
                        <div className="w-7/12 contact-text mt-10 mx-5 gap-4">
                            <h2 className="font-semibold text-4xl mb-7">Contact Us</h2>
                            <div className="contact-text grid grid-cols-3 gap-4">
                            {ContactData.map((contact,index) => {
                                return(
                                <ContactCard image={contact.image} name={contact.name} detail={contact.detail}/>
                                )
                            } )}
                            </div>
                        </div>
                        <div className="w-5/12 our-mission-img">
                            <img src={contactimg} className="w-120 my-9 mx-auto"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;