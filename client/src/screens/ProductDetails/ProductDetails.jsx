import { useState, useEffect } from "react";
import { postResp } from "../services";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails(props) {
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const foundResp = props.resps?.find((resp) => {
      return resp.id === params.id;
    });
    if (foundResp) {
      setImgURL(foundResp.fields.imgURL);
      setName(foundResp.fields.name);
      setLocation(foundResp.fields.location);
      setCondition(foundResp.fields.code);
      setPrice(foundResp.fields.code);
      setDescription(foundResp.fields.code);
    }
  }, [params.id, props.resps]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResp = {
      imgURL,
      name,
      location,
      condition,
      price,
      description,
    };
    const response = await postResp(newResp);
    props.setToggle((prevToggle) => !prevToggle);
    if (response) {
      navigate("/idk");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="newpro">
      <input
        type="text"
        value={name}
        name="bigName"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={imgURL}
        name="img"
        onChange={(e) => setImgURL(e.target.value)}
      />
      <p>Location:</p>
      <input
        type="text"
        value={location}
        name="location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <p>Condition:</p>
      <input
        type="text"
        value={condition}
        name="condition"
        onChange={(e) => setCondition(e.target.value)}
      />
      <p>Item Name:</p>
      <input
        type="text"
        value={name}
        name="smallName"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Price:</p>
      <input
        type="text"
        value={price}
        name="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <p>Description:</p>
      <input
        type="text"
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button>Submit :D</button>
    </form>
  );
}

export default ProductDetails

