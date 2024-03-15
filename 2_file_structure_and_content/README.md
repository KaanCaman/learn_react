# Dosya Yapısı ve İçeriği / File Structure and Content

## Dosya Yapısı / File Structure

```md
src/
├── assets/
├── components/
├── pages/
├── services/    
├── styles/
├── utils/
├── App.js
└── index.js
```

## Dosya İçeriği / File Content

### 1. src/assets/

- Proje içerisinde kullanılacak görseller, ikonlar, fontlar gibi statik dosyaların bulunduğu klasördür.

- This is the folder where static files such as images, icons, fonts, etc. that will be used in the project are located.

### 2. src/components/

- Proje içerisinde kullanılacak componentlerin bulunduğu klasördür.

- This is the folder where the components to be used in the project are located.

- Bu klasör içerisinde her bir component için ayrı bir klasör oluşturulabilir. Örneğin; Button, Card, Input gibi.

- A separate folder can be created for each component in this folder. For example; Button, Card, Input, etc.

### 3. src/pages/

- Proje içerisinde kullanılacak sayfaların bulunduğu klasördür.

- This is the folder where the pages to be used in the project are located.

- Bu klasör içerisinde her bir sayfa için ayrı bir klasör oluşturulabilir. Örneğin; Home, About, Contact gibi.

- A separate folder can be created for each page in this folder. For example; Home, About, Contact, etc.

### 4. src/services/

- Proje içerisinde kullanılacak servislerin bulunduğu klasördür.

- This is the folder where the services to be used in the project are located.

- Bu klasör içerisinde her bir servis için ayrı bir dosya oluşturulabilir. Örneğin; api.js, auth.js gibi.

- A separate file can be created for each service in this folder. For example; api.js, auth.js, etc.

### 5. src/styles/

- Proje içerisinde kullanılacak stil dosyalarının bulunduğu klasördür.

- This is the folder where the style files to be used in the project are located.

- Bu klasör içerisinde global stil dosyaları, tema dosyaları, mixin dosyaları gibi dosyalar bulunabilir.

- This folder may contain global style files, theme files, mixin files, etc.

### 6. src/utils/

- Proje içerisinde kullanılacak yardımcı fonksiyonların bulunduğu klasördür.

- This is the folder where the helper functions to be used in the project are located.

- Bu klasör içerisinde genel olarak kullanılacak fonksiyonlar bulunabilir. Örneğin; date.js, string.js gibi.

- This folder may contain functions that will be generally used. For example; date.js, string.js, etc.

### 7. src/App.js

- Proje içerisinde kullanılacak ana componentin bulunduğu dosyadır.

- This is the file where the main component to be used in the project is located.

### 8. src/index.js

- Projenin başlangıç noktası olan dosyadır.

- This is the file that is the starting point of the project.,

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
