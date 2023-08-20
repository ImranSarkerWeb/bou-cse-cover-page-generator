import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-20 mb-10 text-6xl font-semibold text-amber-600 shadow-md py-10">
        Uh! I am thinking about Home Page design!
      </h1>
      <Link to="page-generator" className="  btn  btn-wide btn-success">
        Visit Page Generator Page
      </Link>
    </div>
  );
};

export default Home;
