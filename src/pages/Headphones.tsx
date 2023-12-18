import HeadphonesTitle from "../components/Headphones/HeadphonesTitle";
import HeadphonesProduct from "../components/Headphones/HeadphonesProduct";
import HomeShop from "../components/HomeShop";


interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const Headphones = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <>
      <HeadphonesTitle />
      <HeadphonesProduct />
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </>
  );
};

export default Headphones;
