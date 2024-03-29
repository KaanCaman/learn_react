import UseCallbackComponent from "./UseCallbackComponent";

/**
 * The `useCallback` hook in React is a hook that will return a memoized version
 * of the callback function that only changes if one of the dependencies has changed.
 * It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
 * Here's a basic usage of `useCallback`:
 *
 * React'teki `useCallback` kancası, memoize edilmiş bir versiyonu döndürecek bir kancadır
 * Sadece bağımlılıklardan biri değiştiğinde değişen geri arama işlevinin
 * Gereksiz render'ları önlemek için referans eşitliğine dayanan optimize edilmiş alt bileşenlere callback'ler aktarırken kullanışlıdır.
 * İşte `useCallback`in temel bir kullanımı:
 *
 * ```typescript
 * const memoizedCallback = useCallback(
 *   () => {
 *     doSomething(a, b);
 *   },
 *   [a, b],
 * );
 * ```
 *
 * In this example, `useCallback` will return a memoized version of the function that only changes if `a` or `b` changes.
 * This is useful in scenarios where the function is passed as a prop to child components.
 * If the function reference stays the same between renders, the child components won't re-render unnecessarily.
 *
 * Bu örnekte, `useCallback` fonksiyonun sadece `a` veya `b` değiştiğinde değişen memoize edilmiş bir versiyonunu döndürecektir.
 * Bu, fonksiyonun alt bileşenlere bir prop olarak aktarıldığı senaryolarda kullanışlıdır.
 * Fonksiyon referansı render işlemleri arasında aynı kalırsa, alt bileşenler gereksiz yere yeniden render edilmeyecektir.
 *
 */
const UseCallback = () => {
  return (
    <>
      <h1>UseCallback</h1>
      <UseCallbackComponent />
    </>
  );
};

export default UseCallback;
