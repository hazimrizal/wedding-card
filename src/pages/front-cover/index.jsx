import { useState } from "react";
import Heading4 from "../../utils/Heading4";
import MainTitle from "../../utils/MainTitle";


const FrontCover = (props) =>{
    const [title, setTitle] = useState();

    return (
        <div style={{backgroundColor: '#fde7ef', height: '100%' }}>
            <Heading4 
            eventName='Adam'
            />
            <MainTitle title='Adam'/>
          
        </div>
    )
}
export default FrontCover