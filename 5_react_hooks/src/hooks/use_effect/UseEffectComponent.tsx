import { useEffect, useState } from "react";

// Post tipi tanımlanır
// Post type is defined
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// uri tanımlanır
// uri is defined
const uri: string = "https://jsonplaceholder.typicode.com/posts/";

/**
 *  useEffect hook'u, component'in render edilmesi ve güncellenmesi sırasında yan etkileri gerçekleştirmek için kullanılır.
 *
 *  useEffect hook is used to perform side effects during the rendering and updating of the component.
 *
 *  ### Kullanımı - Usage:
 *
 *  ---
 *  * * *
 *  ---
 * - dependency array olmadan çalışır. Her renderda çalışır ve component kaldırıldığında cleanup çalışır.
 * - It runs without a dependency array. It runs on every render and cleanup runs when the component is removed.
 *  ```ts
 * useEffect(() => {
 *  /// side effect
 *
 * });
 *  ```
 *  ---
 *  * * *
 *  ---
 *
 *  - dependency: useEffect'in çalışmasını tetikleyen değişkenlerdir. Eğer dependency array boş ise sadece ilk renderda çalışır.
 *  - dependency: are variables that trigger the execution of useEffect. If the dependency array is empty, it only runs on the first render.
 *
 * ```ts
 *   useEffect(() => {
 *     /// side effect
 *  }, [dependency]);
 * ```
 *  ---
 *  * * *
 *  ---
 *
 * - cleanup: useEffect çalışmadan önce çalıştırılan fonksiyondur. Component kaldırıldığında çalışır.
 * - cleanup: is the function that is run before useEffect runs. It runs when the component is removed.
 * ```ts
 * -useEffect(() => {
 *    /// side effect
 *   return () => {
 *    /// cleanup
 *  }
 * }, [dependency]);
 * ```
 *  ---
 *  * * *
 *  ---
 * - dependency array boş ise sadece ilk renderda çalışır ve component kaldırıldığında cleanup çalışır.
 * - If the dependency array is empty, it only runs on the first render and cleanup runs when the component is removed.
 * ```ts
 * - useEffect(() => {
 *   /// side effect
 *  return () => {
 *   /// cleanup
 * }
 * }, []);
 * ```
 *  ---
 *  * * *
 *  ---
 *  - dependency array olmadan çalışır. Her renderda çalışır ve component kaldırıldığında cleanup çalışır.
 * - It runs without a dependency array. It runs on every render and cleanup runs when the component is removed.
 * ```ts
 * - useEffect(() => {
 *  /// side effect
 *  return () => {
 *  /// cleanup
 *   }
 *  });
 * ```
 *
 * ---
 * * * *
 * ---
 *
 * - setInterval ve setTimeout fonksiyonları ile birlikte kullanılan fonksiyonlar component kaldırıldığında temizlenmelidir.
 * - Functions used with setInterval and setTimeout functions should be cleaned up when the component is removed.
 *
 * ```ts
 * useEffect(() => {
 *  const interval = setInterval(() => console.log("1 second interval"), 1000);
 * return () => {
 *    clearInterval(interval);
 *   }
 * }, []);
 * ```
 *
 * */

const UseEffectComponent = () => {
  //
  // postId için state tanımlanır.
  //  state is defined for postId
  //
  const [postId, setPostId] = useState(1);

  //
  // post için state tanımlanır.
  // state is defined for post
  //
  const [post, setPost] = useState<Post | undefined>(undefined);

  //
  //   loading için state tanımlanır.
  //   state is defined for loading
  //
  const [loading, setLoading] = useState(true);

  // ilk renderda ve postId değiştiğinde çalışır
  // runs on first render and when postId changes
  useEffect(
    () => {
      console.log("useEffect çalıştı / useEffect run");
      // setLoading(true) ile loading true yapılır.
      // setLoading(true) sets loading to true.
      setLoading(true);

      // fetch ile veri çekilir ve setPost ile post state'i güncellenir.
      // Data is fetched with fetch and the post state is updated with setPost.
      fetch(uri + postId)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        });
    },
    [postId] /* postId değiştiğinde çalışır / runs when postId changes */
  );

  // Kompnent kaldırıldığında çalışır
  // runs when the component is removed

  useEffect(
    () => {
      // setInterval ve setTimeout fonksiyonları ile birlikte kullanılan fonksiyonlar
      // component kaldırıldığında temizlenmelidir.
      // eğer temizlenmezse sürekli çalışmaya devam eder.
      //
      // Functions used with setInterval and setTimeout functions
      // should be cleaned up when the component is removed.
      // if not cleaned up, it will continue to run continuously.
      //
      const interval = setInterval(
        () => console.log("1 second interval"),
        1000
      );

      return () => {
        // console.log fonksiyonu ile component kaldırıldığında çalıştırılacak fonksiyonu görebiliriz.
        // We can see the function to be run when the component is removed with the console.log function.

        console.log("Component will unmount / Komponent kaldırılacak");

        // setInterval fonksiyonunu temizleme
        // clearInterval function cleanup
        clearInterval(interval);
      };
    },
    []
    /*
     * dependency array boş ise sadece ilk renderda çalışır ve component kaldırıldığında cleanup çalışır.
     * If the dependency array is empty, it only runs on the first render and cleanup runs when the component is removed.
     */
  );

  //   return ile component döndürülür.
  // component is returned with return
  return (
    <>
      <h4>useEffect - Kullanımı / Usage</h4>
      <p>
        Bu veriler aşağıdaki linkten geliyor. - This data comes from the link
        below.
      </p>
      <p>
        <a href={`${uri}${postId}`}>{`${uri}${postId}`}</a>
      </p>
      <div id="postArea">
        <button
          onClick={() => {
            setPostId(postId + 1);
          }}
        >
          <span>Next post / Diğer post</span>
        </button>
        <div>
          {/* Eğer loading true ise loading değilse ve post varsa post gösterilir yoksa 'Post not Found gösterilir.' */}
          {/* If loading is true, loading is shown, if not and there is a post, the post is shown, otherwise 'Post not Found is shown.' */}
          {loading ? (
            <p>Loading...</p>
          ) : post ? (
            <div>
              <h3>{post.id}</h3>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ) : (
            <p>Post not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UseEffectComponent;
