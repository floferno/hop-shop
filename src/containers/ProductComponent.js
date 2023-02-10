import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../App.css'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards container">
                        <div className="card">
                            <div className="image" height={300}>
                                <img src={image} alt={title} />
                            </div>
                            <div className="content contain">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">#{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default ProductComponent;