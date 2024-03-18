import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// https://reactrouter.com/en/main/start/tutorial#deleting-records

// When the user clicks the submit button:
// <Form> prevents the default browser behavior of sending a new POST request to the server,
// but instead emulates the browser by creating a POST request with client side routing
// The <Form action="destroy"> matches the new route at "contacts/:contactId/destroy" and sends it the request
// After the action redirects, React Router calls all of the loaders for the data on the page to get the latest values (this is "revalidation").
// useLoaderData returns new values and causes the components to update!
// Add a form, add an action, React Router does the rest.

// Kullanıcı gönder düğmesine tıkladığında:
// <Form> sunucuya yeni bir POST isteği gönderme şeklindeki varsayılan tarayıcı davranışını önler,
// bunun yerine istemci tarafı yönlendirme ile bir POST isteği oluşturarak tarayıcıyı taklit eder
// <Form action="destroy">, "contacts/:contactId/destroy" adresindeki yeni rotayla eşleşir ve isteği gönderir
// Eylem yönlendirildikten sonra, React Router en son değerleri almak için sayfadaki veriler için tüm yükleyicileri çağırır (bu "yeniden doğrulamadır").
//  useLoaderData yeni değerleri döndürür ve bileşenlerin güncellenmesine neden olur!
// Bir form ekleyin, bir eylem ekleyin, gerisini React Router halleder.

export async function action({ params }) {
  await deleteContact(params.id);
  return redirect(`/`);
}
