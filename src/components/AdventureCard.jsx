import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AdventureCard = ({adventer}) => {
    const {adventure_title, image, eco_friendly_features } = adventer;
    return (
        <div className="card bg-white rounded-lg  shadow-2xl">
             <figure className="px-5 pt-5">
    <img
      src={image}
      alt={adventure_title}
      className="rounded-xl h-52 w-full" />
  </figure>
    
        <div className="card-body px-5">
          <h2 className="card-title text-primary font-semibold text-xl animate__animated animate__fadeInUp animate__delay-2s">{adventure_title}</h2>
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            {
                eco_friendly_features.map((eco_friendly_features, index) => <p key={index}>{eco_friendly_features}</p>)
            }
          </div>
          <div className="card-actions justify-start animate__animated animate__fadeInUp animate__delay-4s">
            <Link to={`/adventer/${adventer.id}`} className="px-3 py-2 rounded-md text-white text-base font-semibold bg-bgbton flex items-center gap-2">Explore Now <GoArrowRight className="text-lg font-semibold "/></Link>
          </div>
        </div>
      </div>
    );
};

export default AdventureCard;