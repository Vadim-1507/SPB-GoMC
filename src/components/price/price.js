import React, {Component} from "react";

export default class Price extends Component {
    text = ['За м. кв.', 'За упаковку'];

    state = {
        select: 0,
    }

    ActiveClass(i) {
        if (this.state.select === i) {
            return 'unit--select unit--active'
        } else {
            return 'unit--select'
        }
    }

    ChangePrice = (i) => {
        this.setState({select: i})
    }

    render() {
        const {priceGold, priceRetail, priceRetailAlt, priceGoldAlt} = this.props.Info

       const Gold = this.state.select ? priceGoldAlt : priceGold;
       const Retail = this.state.select ? priceRetailAlt : priceRetail;

        return (
            <>
                <div className="product_units">
                    <div className='unit--wrapper'>
                        {this.text.map((value, i) => {
                            return (
                                <div className={this.ActiveClass(i)} key={i} onClick={this.ChangePrice.bind(this, i)}>
                                    <p className="ng-binding">{value}</p>
                                </div>
                            )}
                        )}
                    </div>
                </div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br/>клуба</span>
                    <span className="goldPrice">{Math.round(parseFloat(Gold) * 100) / 100}</span>
                    <span className="rouble__i black__i"><i className="fas fa-ruble-sign"> </i></span>
                </p>
                <p className="product_price_default">
                    <span className="retailPrice">{Math.round(parseFloat(Retail) * 100) / 100}</span>
                    <span className="rouble__i black__i"><i className="fas fa-ruble-sign"> </i></span>
                </p>
                <div className="product_price_points">
                    <p className="ng-binding">Можно купить за 231,75 балла</p>
                </div>
            </>
        );
    }
}
