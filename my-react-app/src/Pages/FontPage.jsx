import Navbar from "../components/Navbar";
import exampleImage from '../assets/Images/sample.jpg';
import './FontPage.css';


function Card({fontimageurl, title}){
    return(
        <div className="fontcard">
            <img src={fontimageurl} alt="firstfont" className="fontimg"></img>
            <h2 className="fontcard-title">{title}</h2>
            <p>download</p>
        </div>
            );
}



function FontPage(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="cardcontainer">
                <Card fontimageurl={exampleImage} title={"Firstfont"}/>    
                <Card fontimageurl={exampleImage} title={"Secondfont"}/>    
                <Card fontimageurl={exampleImage} title={"Thirdfont"}/>    
                <Card fontimageurl={exampleImage} title={"Fourthfont"}/>    
                <Card fontimageurl={exampleImage} title={"Fifthfont"}/>  
                <Card fontimageurl={exampleImage} title={"Sixthfont"}/>      
            </div>
            
           
        </div>
    );
}

export default FontPage;