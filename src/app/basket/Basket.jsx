import { useBasket } from "@/app/context/BasketProvider.jsx";
export default function Basket() {
  const [basket, setBasket] = useBasket();
  let testBasket = basket;
  return (
    <div>
      <h1>
        {testBasket.map((item) => (
          <div>
            <h1>{item}</h1>
          </div>
        ))}
      </h1>
    </div>
  );
}
