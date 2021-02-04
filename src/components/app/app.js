import React, {Component} from "react";
import Price from "../price/price";
import PacingSize from '../packingSize/pacingSize'
import ProductService from "../../service/product_service";
import Counter from "../counter/counter";

export default class App extends Component {
    productService = new ProductService;

    state = {
        product: [],
    };

    componentWillMount() {
        this.productService.getProduct()
            .then(res => this.setState({product: res}))
            .catch(error => {
                console.log('Произошла ошибка')
            })
    }

    ImagePrefix(image) {
        let imageName = image.split('.');
        imageName[imageName.length - 2] = imageName[imageName.length - 2] + '_220x220_1';

        return imageName.join('.')
    }

    render() {
        const items = this.state.product.map((products, i) => {
            return (
                <div className="product product_horizontal" key={i}>
                    <span className="product_code">Код: {products.code}</span>
                    <div className="product_status_tooltip_container">
                        <span className="product_status">Наличие</span>
                    </div>
                    <div className="product_photo">
                        <a href="#" className="url--link product__link">
                            <img src={this.ImagePrefix(products.primaryImageUrl)} alt='product'/>
                        </a>
                    </div>
                    <div className="product_description">
                        <a href="#" className="product__link">{products.title}</a>
                    </div>
                    <div className="product_tags hidden-sm">
                        <p>Могут понадобиться:</p>
                        <a href="#" className="url--link">{products.assocProducts}</a>
                    </div>

                    <Price Info={products}/>

                    <div className="list--unit-padd"></div>
                    <div className="list--unit-desc">
                        <div className="unit--info">
                            <div className="unit--desc-i"></div>
                            <PacingSize Size={products}/>
                        </div>
                    </div>
                    <div className="product__wrapper">
                        <Counter Count={products}/>

                    </div>
                </div>
            );
        });

        return (
            <>
                <View items={items}/>
            </>
        )
    }
}

const View = ({items}) => {
    return (

        <div className="products_page pg_0">
            {items}
        </div>
    )
}
