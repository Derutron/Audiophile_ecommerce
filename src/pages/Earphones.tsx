import EarphoneTitle from "../components/Earphones/EarphoneTitle";
import EarphoneProducts from "../components/Earphones/EarphoneProducts";
import HomeShop from "../components/HomeShop";


interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}


const Earphones = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <div>
      <EarphoneTitle />
      <EarphoneProducts />
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default Earphones;
