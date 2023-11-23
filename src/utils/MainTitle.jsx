import { Typography } from "@mui/material";

const MainTitle = (props) => {
    const {title} = props;
    return (
        <Typography textAlign={'center'} variant="h4">{title}</Typography>
    )
}

export default MainTitle;