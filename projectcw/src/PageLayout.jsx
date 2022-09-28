import Footer from './Components/Footer'
import Header from './Components/Header'

const Pagelayout = (props)=>{
    return <div>
        <Header />
        {props.children}
        <Footer />
    </div>
}

export default Pagelayout