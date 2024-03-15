
function App() {
  // bir değişken tanımlaması ya da bir fonksiyon vb. tanumlamlamlarını return ifadesinden önce yapmalıyız.

  // We must define a variable or a function, etc. before the return statement.

  const myVar: string = "Kaan"
  const myNumber: number = 23

  /// return () parantez içersin de dönen değerler html etiketleridir.
  /// html etiketleri içersine değişkenler verebiliriz bunun için { } arasında kullanılması gerekmektedir.

  /// return () The values returned in parentheses are html tags.
  /// We can give variables inside html tags, for this, it must be used between { }.

  return (
    <div>
      <p>My name is {myVar} and  {myNumber} years old. <br />
        This is my first react project.</p><br />
      <p>Benim adim {myVar} ve {myNumber} yasindayim.<br />
        Bu Benim ilk react projem.</p>
    </div>


  )
}

export default App
