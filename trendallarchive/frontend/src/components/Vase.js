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
    font-size: 14px;
    width: 60%;
    margin-bottom: 0px;
`


const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding: 35px;
    display: absolute;
    margin-top: 70px;
`
//takes vaseID parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);
//function to call and consume the API
const Vase=()=>{
    
    const [Data,setData]=useState({
        VaseRef:'',
        Fabric:'',
        Technique:'',
        Subject:'',
        Height:'',
        Diameter:'',
        ArtistName:'',
        Publications:'',
        Collection:'',
        Shape:'',
        Provenance:''
    })
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getthevase/?vaseRef=${vaseRef}`)//get the selected vase using the vaseID passed through the URL
            .then(res=>{
                console.log({vaseRef})
                console.log('Response from main API: ',res) //printing the response to the console
                let vaseData=res.data[0]; //add data to vaseData, then assign into each variable
                setData({VaseRef:vaseData.vaseRef,Fabric:vaseData.fabric,Technique:vaseData.technique,Subject:vaseData.subject, Height:vaseData.height, Diameter:vaseData.diameter, ArtistName:vaseData.artistName,Collection:vaseData.collectionName,Shape:vaseData.shapeName,Provenance:vaseData.provenanceName, Publications:vaseData.publications}) //vaseData is never assigned so these variables areundefined
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

//return the vase into that was retrieved in the function
    return(
        <>

        
        <FormDiv>
           <VaseTitle>{Data.VaseRef}, {Data.Fabric}</VaseTitle> 
           <Attribute><p>VASE NUMBER: {Data.VaseRef}</p></Attribute> 
           <Attribute><p>Collection: {Data.Collection}</p></Attribute>
           <Attribute><p>Publications: {Data.Publications}</p></Attribute>
           <Attribute><p>Fabric: {Data.Fabric}</p></Attribute>
            <Attribute><p>Technique: {Data.Technique}</p></Attribute>
            <Attribute><p>Description: {Data.Subject}</p></Attribute>
            <Attribute><p>Artist: {Data.ArtistName}</p></Attribute>
            <Attribute><p>Shape: {Data.Shape}</p></Attribute>
            <Attribute><p>Provenance: {Data.Provenance}</p></Attribute>
            <Attribute><p>Height: {Data.Height} cm</p></Attribute>
            <Attribute><p>Diameter: {Data.Diameter}</p></Attribute>
        </FormDiv>
        </>
    )
}
export default Vase;