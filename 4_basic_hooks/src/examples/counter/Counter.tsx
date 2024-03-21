import Content from "../../components/counter/content"
import Footer from "../../components/footer"
import Header from "../../components/header"

import '../../styles/counter.css'

const CounterApp = () => {
  return (
    <div className="screen">
      
    {/* custom - Header */}
    <Header/>

    {/* custom Content */} 
    <Content/>

    {/* custom Footer */}
    <Footer/>
   
  </div>
  )
}

export default CounterApp