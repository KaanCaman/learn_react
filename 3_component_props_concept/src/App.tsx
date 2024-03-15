import { StaticText } from "./component/StaticText"
import DynamicText from "./component/DynamicText"
import MyButton from "./component/MyButton"

function App() {
  return (
    // <> </> : React Fragment - Kapsayıcı React elemanıdır.

    <>
      <div>React Eğitimi 1</div>
      <div>React Eğitimi 1</div>
      <div>React Eğitimi 1</div>
      
      <StaticText/>
      <StaticText/>
      <StaticText/>

      <DynamicText text="React Eğitimi 2"/>
      <DynamicText text="React Eğitimi 3"/>
      <DynamicText text="React Eğitimi 4"/>
 
      <MyButton onClick={() =>  {alert('Clicked !')}}  label="Click ME ! " style={
       style.myButton
      } />
      
      </>
  )
}
type MyCssTypes  = {
  [key:string] : React.CSSProperties
}
const style : MyCssTypes  =  {
  myButton:{
    width: 100,
    height: 50,

    backgroundColor: 'cyan',
    color: 'black'
  }
}

export default App
