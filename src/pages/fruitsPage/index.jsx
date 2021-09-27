import { useSelector } from "react-redux";
import "./styles.css";
const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);
  console.log(fruits[0].img);
  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit}>
          <p>Fruta: {fruit.name}</p>
          <figure>
            <img alt={fruit.name} src={fruit.img} />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;
