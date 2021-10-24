import React from "react";
import { shapeData } from "./ShapeData";
import { provData } from "./ProvenanceData";
import { colData } from "./CollectionData";

//-------------------------------------------------------------

export const TermsList = (props) => {
    //Return Vase Reference Term Dictionary
    if(props.name === "ref"){
        return (
            <div>
                Vase Reference Convention: [ Part 1, 2 or 3 in RVP ] - [ ID in RVP ]<br/><br/>
                For example: 2-238
            </div>
        )
    }

    //Return Shape Term Dictionary
    if(props.name === "shape"){
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

    //Return Fabric Term Dictionary
    if(props.name === "fabric"){
        return (
            <div>
                Currently Not Implemented
            </div>
        )
    }

    //Return Subject Dictionary
    if(props.name === "subject"){
        return (
            <div>
                Search by any keyword and the database will find references to the subject with partial matching
            </div>
        )
    }

    //Return Publication Term Dictionary
    if(props.name === "pub"){
        return (
            <div>
                Currently Not Implemented
            </div>
        )
    }

    //Return Collection Term Dictionary
    if(props.name === "col"){
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

    //Return Provenance Term Dictionary
    if(props.name === "prov"){
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

    //Return Term Dictionary preliminary information
    else{
        return (
            <div>
                Use the Info Icon to display a list of searchable terms per field.
            </div>
        )
    }
}

export default TermsList


