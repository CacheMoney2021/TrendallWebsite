import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';



const FormDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding:4%;
    display: absolute;
`
//takes vaseRef parameter from the URL to pass into API below
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
        axios.get(`http://127.0.0.1:8000/api/getthevase/?vaseRef=${vaseRef}`)//get the selected vase using the vaseRef passed through the URL
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

//return and display the vase information that was retrieved in the function
    return(
        <>

        
        <FormDiv>
            <div className = "vaseDiv">
                <h2>{Data.VaseRef}, {Data.Fabric}, {Data.Collection}</h2>
            <table>
                <tr>
                    <th>Vase Number</th> <td>{Data.VaseRef}</td> 
                </tr>
                <tr>
                    <th>Collection</th> <td>{Data.Collection}</td> 
                </tr>
                <tr>
                    <th>Fabric</th> <td>{Data.Fabric}</td> 
                </tr>
                <tr>
                    <th>Technique</th> <td>{Data.Technique}</td> 
                </tr>
                <tr>
                    <th>Description</th> <td>{Data.Subject}</td> 
                </tr>
                <tr>
                    <th>Shape</th> <td>{Data.Shape}</td> 
                </tr>
                <tr>
                    <th>Provenance</th> <td>{Data.Provenance}</td> 
                </tr>
                <tr>
                    <th>Publications</th>  <td>{Data.Publications}</td> 
                </tr>
                    <th>Height</th><td>{Data.Height} cm</td>
                <tr>
                    <th>Diameter</th><td>{Data.Diameter} cm</td>
                </tr>
            </table>
            </div>


        </FormDiv>
        </>
    )
}
export default Vase;