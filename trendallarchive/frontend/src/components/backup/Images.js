import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VaseTitle = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 40px;
font-weight: 400;
line-height:2.5em;
color: #3F342C;
`

const AttributeTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #3F342C;
`
const Attribute = styled(AttributeTitle)`
    font-size: 16px;
    width: 36%;
    margin-bottom: 0px;
`


const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding: 45px;
    display: absolute;
`
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);
//get a plate reference from Plate table to pass in as a string to the URL of its image in blob storage
const Images=()=>{

    const [Data, setData] = useState({
        VaseRef:'',
        plateRef:''
    });
    useEffect(() => {
        axios.get(`http:127.0.0.1:8000/api/viewvase/?vaseRef=${vaseRef}`)//need to know how to pass in vase_id, hard coded for now
            .then(response => {
                console.log(response.data)
                let vaseData=response.data[0]; //add data to vaseData, then assign into each variable
                setData({plateRef:vaseData.plateRef});
        })
}, []);


    return(
        <>
           {Data.plateRef}
        </>
    )
}
export default Images;









