import React, { useState } from "react";
import Nabbar from "./Nav";
import {Form,Button,Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../utilities/Loader"


function Home(){
const [loading,setLoading] = useState(false);

    return(
        <div className="home_page">
            <Nabbar/>
           

            <div className ="upload">
            <Card className="smallcard">
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                        Upload your ArtWork here(It can either be music,image,video or any of your artwork)
                    </Form.Label>
                    <Form.Control type ="File" />
                </Form.Group>
            </Form>
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                       Name
                    </Form.Label>
                    
                    <Form.Control type ="Text" />
                </Form.Group>
            </Form>
            <Button onClick={(event)=>{
                setLoading(true)                
            }}>Mint</Button>
            </Card>
            <Loader 
            loading={loading}/>
            </div>
        </div>
    )
}
export default Home;