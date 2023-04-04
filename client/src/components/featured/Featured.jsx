import useFetch from "../../hooks/useFetch";
import "./featured.css";
import ME from "../featured/p.jpg"
import { Link } from "react-router-dom";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=delhi,mumbai,pune,"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1c/d3/b2/4f/exterior-view.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={ME}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
