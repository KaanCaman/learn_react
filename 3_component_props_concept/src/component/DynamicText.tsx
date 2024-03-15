// Propsları kullanarak dinamik bir şekilde text gösterimi yapacağız.
// We will show the text dynamically using Props.


// Propsları kullanmak için bir tip tanımlayalım.
// Let's define a type to use Props.

type Props = {
  // text prop'unun tipi string veya undefined olabilir. string?
  // The type of the text prop can be string or undefined. string?
    text: string | undefined;

}

const DynamicText = (props: Props) => {
  return (
    // eğer props.text string ise props.text'i, değilse 'Boş değer' yazdır.
    // If props.text is a string, print props.text, otherwise print 'Boş değer'.
    <div>
      
        {typeof props.text === 'string' ? props.text : 'Boş değer'}
    </div>
  )
}

export default DynamicText