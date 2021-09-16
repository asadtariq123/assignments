import Header from "../../components/header";
import Section from "./section/students";
import Footer from "../../components/footer/footer";
function LandingPage(){
    return(
        <div className="container-fluid">
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}
export default LandingPage;