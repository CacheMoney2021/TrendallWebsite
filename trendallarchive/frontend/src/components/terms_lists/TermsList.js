import React, { useEffect,useState } from "react";
import axios from 'axios';
import {shapeData} from "./ShapeData";
import {provData} from "./ProvenanceData";
import {colData} from "./CollectionData";

//both search with drop down and advanced search are linked, just need to pass data through URL. 
export const ShapeList = () => {

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

//both search with drop down and advanced search are linked, just need to pass data through URL. 
export const ProvenanceList = () => {

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

export const CollectionList = () => {

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


