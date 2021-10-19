import React from "react";
import { shapeData } from "./ShapeData";
import { provData } from "./ProvenanceData";
import { colData } from "./CollectionData";

export const TermsList = (props) => {
    if(props.name === "shape="){
        return (
            <div>
                {shapeData.map((data) => {
                    return (
                        <div>{data.shape} <br/></div>
                    );
                })}
            </div>
        )
    }
    if(props.name === "col="){
        return (
            <div>
                {colData.map((data) => {
                    return (
                        <div>{data.collection} <br/></div>
                    );
                })}
            </div>
        )
    }
    if(props.name === "prov="){
        return (
            <div>
                {provData.map((data) => {
                    return (
                        <div>{data.provenance} <br/></div>
                    );
                })}
            </div>
        )
    }
    else{
        return (
            <div>
                Use the Info Icon to display a list of searchable terms per field.
            </div>
        )
    }
}

export default TermsList


