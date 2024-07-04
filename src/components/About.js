import aboutimg from "../img/about.png"
import Benefite from "./Benefite"
import BenefitsData from "../utils/BenefitsData"

const About =()=>{

    // console.log(BenefitsData[1].name)
    
    return (
        <div>
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="our-mission-img">
                            <img src={aboutimg} className="w-3/4 mx-auto"/>
                        </div>
                        <div className="our-mission-text mt-24 mx-5">
                            <h2 className="font-semibold text-4xl mb-5">Our mission is to save you time</h2>
                            <p className="mb-3">Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.</p>
                            <p className="mb-3">Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt augue interdum velit euismod in pellentesque.</p>
                            <p className="mb-3">Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.</p>
                            <p>Eget egestas purus viverra accumsan in nisl nisi scelerisque. </p>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-4 gap-6">
                    {
                        BenefitsData.map((value,index) => {
                            return (
                                <Benefite imgsrc={value.image} title={value.name} details={value.detail}/>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About