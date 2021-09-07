import React from "react";
import { Arithmetic, Expression } from "../../../models/definitions";
import { getSuggestionsBasedOnExpressionKind } from "../../../utils";
import { ExpressionComponent } from "../../Expression";

interface ArithmeticProps {
    model: Expression
    callBack: (suggestions: string[], model: Expression) => void
}
export function ArithmeticC(props: ArithmeticProps) {
    const {model, callBack} = props;
    let lhsExpression: any;
    let rhsExpression: any;
    let lhs: any;
    let rhs: any;
    
    if (model.kind === "ArithmeticC" ) {
        const arithmeticModel: Arithmetic = model.expressionType as Arithmetic;
        lhsExpression = arithmeticModel.lhsOperand
        rhsExpression = arithmeticModel.rhsOperand
        lhs = <ExpressionComponent model={lhsExpression} callBack={callBack} isRoot={false}/>;
        rhs = <ExpressionComponent model={rhsExpression} callBack={callBack} isRoot={false}/>;
    }

    const onClickOnExpression = (model: Expression, e:any) => {
        e.stopPropagation()
        callBack(getSuggestionsBasedOnExpressionKind("RelationalC"), model)
    };

    return (
        <span>
            {/* {"("} */}
            {/* <button className="template-button">{lhs}</button> */}
            <span className="template-button" onClick={(e)=>onClickOnExpression(lhsExpression, e)}>{lhs}</span>
            <span className="App-expression-block App-expression-block-element">
                <button className="template-button">operators</button>    
            </span>
            {/* <button className="template-button">{rhs}</button> */}
            <span className="template-button" onClick={(e)=>onClickOnExpression(rhsExpression, e)}>{rhs}</span>
            {/* {")"} */}
        </span>
    );
}
