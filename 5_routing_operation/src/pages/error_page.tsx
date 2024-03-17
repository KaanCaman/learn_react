import { useRouteError, ErrorResponse } from "react-router-dom";

//* Defined our error page
//* Hata sayfamızı tanımladık
const ErrorPage = () => {
  //* useRouteError() returns the error that caused the route to render this fallback.
  //? If there's no error, it will return undefined.
  //* useRouteError() bu yedek sayfayı oluşturan rotayı oluşturan hatayı döndürür.
  //? Eğer hata yoksa, undefined dönecektir.

  const error = useRouteError();

  //* Log the error to the console
  //*  Hatayı console'a yazdırıyoruz.
  console.error(error);

  //* Render a fallback UI
  //* Hatayı ui ' ya render ediyoruz.
  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. </p>
        <p>Üzgünüm, beklenmedik bir hata ile karşılaştık. </p>

        <p>
          <i>
            {error !== undefined ? (error as ErrorResponse).statusText : "Unknown"}
          </i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
