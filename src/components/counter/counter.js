import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        value: 0,
    }

    HendlerINC = () => {
        const value = this.state.value + 1;
        if (this.ValidHendler(value)) {
            this.setState({value});
        }
    }

    HendlerDEC = () => {
        const value = this.state.value - 1;
        if (this.ValidHendler(value)) {
            this.setState({value});
        }
    }

    HendlerInput = (e) => {
        const value = e.target.value;
        if (this.ValidHendler(value)) {
            this.setState({value})
        }
    }

    ValidHendler = (value) => {
        if (value >= 0 && value <= 10) {
            return true;
        } else {
            return false;
        }
    }

    HendlerCart = (e) => {
        const data = this.state,
            product = e.target.getAttribute('data-product-id'),
            cost = this.props.Count.priceGoldAlt * data.value;
        console.log(`Кол-во: ${data.value}; товар: ${product}; цена: ${Math.round(parseFloat(cost) * 100)/ 100}`);
    }

    render() {
        return (
            <>
                <div className="product_count_wrapper">
                    <div className="stepper">
                        <input className="product__count stepper-input" type="text" value={this.state.value}
                               onChange={(e) => this.HendlerInput(e)}/>
                        <span className="stepper-arrow up" onClick={() => this.HendlerINC()}> </span>
                        <span className="stepper-arrow down" onClick={() => this.HendlerDEC()}> </span>
                    </div>
                </div>
                <span className="btn btn_cart" data-url="/cart/"
                      data-product-id={this.props.Count.productId}
                      onClick={(e) => this.HendlerCart(e)}
                >
                                    <i className="fas fa-shopping-cart"> </i>
                                    <span className="ng-binding">В корзину</span>
                        </span>
            </>
        )
    }
}
