import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "./singlePage.css";
import Loader from "../../components/loader/Loader";
import {addToCart} from "../../features/cartSlice";
import {useDispatch} from "react-redux";

function SinglePage() {
    let { id } = useParams();

    const [loading, setLoading] = useState(true)
    useEffect(() => { setTimeout(() => { setLoading(false) }, 500 )}, [])

    const [toy, setToy] = useState({ id: 1, name: "not found", price: 0, image: " ", description: " " })
    useEffect(() => { axios.get(`http://localhost:8080/catalog/${id}`).then(res => setToy(res.data)) }, [id])

    const dispatch = useDispatch();

    const handleAddToCart = (toy) => {
        dispatch(addToCart(toy))
    };

    return (
        <>
            {loading ? <Loader /> :
                <div className="toy">
                    <div className="page">
                        <div className="image"><img src={toy.image} /></div>
                        <div className="content-toy">
                            <h1>{toy.name}</h1>
                            <p>{toy.description}</p>
                        </div>
                    </div>
                    <div className="footer-page">
                        <h3>price: {toy.price}$</h3>
                        <Link className="go-back" to='/catalog'><button>Go back</button></Link>
                        <button className="add-to-cart" onClick={() => handleAddToCart(toy)}>Add to cart</button>
                    </div>
                </div >
            }
        </>
    )
}

export default SinglePage;
