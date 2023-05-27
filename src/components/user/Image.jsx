import { Box } from "@mui/material";
import { API_URL } from "utils/constants";

const Image = ({ image, size = "60px" }) => {
    return (
        <Box
            width={size}
            height={size}>
            <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                alt="user"
                src={`${API_URL}/assets/${image}`} />
        </Box>
    )
}

export default Image;