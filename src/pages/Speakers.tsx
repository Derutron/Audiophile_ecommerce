import HomeShop from "../components/HomeShop";
import SpeakersProduct from "../components/Speakers/SpeakersProduct";
import SpeakersTitle from "../components/Speakers/SpeakersTitle";


interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}


const Speakers = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <div>
      <SpeakersTitle />
      <SpeakersProduct />
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default Speakers;
