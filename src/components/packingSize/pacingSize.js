import React,{Component} from "react";

export default class PacingSize extends Component {
    render() {
        const {unitFull, unit, unitRatioAlt, unitAlt} = this.props.Size
        return (
            <div className="unit--desc-t">
                <p>
                    <span className="ng-binding">Продается в {unitFull}х:</span>
                    <span className="unit--infoInn">1 {unit} = {Math.round(parseFloat(unitRatioAlt) * 100) / 100} {unitAlt} </span>
                </p>
            </div>
        )
    }
}
