import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";
import {ProductService} from "../services/ProductService";

export const ProductsDisplay: React.FC = () => {
    const [watches, setWatches] = useState<IProduct[]>(ProductService.getAllProducts());

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Watch Kart</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum dolorum natus
                            reiciendis reprehenderit. Consectetur distinctio enim in incidunt inventore nulla
                            perspiciatis, possimus quam quis rem repellat repellendus sunt vitae?</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        watches.length > 0 && watches.map((watch, index) => {
                            return (
                                <div className="col-sm-3" key={watch.id}>
                                    <div className="card mt-3">
                                        <div className="card-header text-center">
                                            <img src={watch.imageUrl} alt="" className="img-fluid"
                                                 style={{height: "200px"}}/>
                                        </div>
                                        <div className="card-body">
                                            <p className="h5">{watch.name}</p>
                                            <p className="fw-bold">&#8377;{watch.price.toFixed(2)}</p>
                                            <p className="h3">
                                                {
                                                    watch.inventory > 10 &&
                                                    <span className="fw-bold text-success">Available</span>
                                                }
                                                {
                                                    watch.inventory > 0 && watch.inventory <= 10 &&
                                                    <span className="fw-bold text-warning">Running Out</span>
                                                }
                                                {
                                                    watch.inventory === 0 &&
                                                    <span className="fw-bold text-danger">Out of Stock</span>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
};
export default ProductsDisplay;