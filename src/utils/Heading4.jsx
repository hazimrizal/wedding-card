import { Typography, Card } from "@mui/material";
import { useEffect } from "react";
import WebFont from 'webfontloader';

const Heading4 = (props) => {

    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Petit Formal Script']
            }
          });
         }, []);

    const {eventName} = props;
    return (
        <Typography textAlign={'center'} variant="h4" fontFamily={'Petit Formal Script'}>{eventName}</Typography>
    )
}

export default Heading4;