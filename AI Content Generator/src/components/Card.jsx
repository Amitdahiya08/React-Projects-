import { Link } from "react-router-dom";

const Card = ({ heading, details, imageUrl, route }) => {
  return (
    <Link
      to={route}
      className="bg-white border border-purple-600 rounded-lg shadow-lg p-6 m-4 w-64 flex flex-col items-center justify-between hover:shadow-xl transform hover:scale-105 transition-all no-underline"
    >
      <img
        src={imageUrl}
        alt={heading}
        className="w-full h-32 object-cover rounded-t-md mb-4"
      />
      <h3 className="text-xl font-bold text-purple-600  text-center mb-2">{heading}</h3>
      <p className="text-sm text-black text-center">{details}</p>
    </Link>
  );
};

export default Card;
