'use client'

import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Texts } from "../data/Texts";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Urls from "../data/Urls";
import Lottie from "lottie-react";
import animation from "../components/images/animation.json"


const Wapper = styled("div")(({ theme }) => ({
  padding: "0px 20px",
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  backgroundColor: "theme.palette.background.default",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px",
  },
}));

const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: "40px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px",
  },
}));

const CustomButton = styled(Button)({
  width: "150px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  backgroundColor: "none",
  borderColor: "#e0a80d",
  borderRadius: "2rem",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "theme.palette.text.heading",
    borderColor: "theme.palette.text.heading",
    boxShadow: "none",
  },
});

const ButtonDiv = styled("div")({
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});



function AboutMe() {
  const theme = useTheme();

  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <RootContainer id="aboutme">
      <Wapper >
        {isMdOrUp && (
          <Lottie animationData={animation} height="100%" width="100%" style={{ transform: 'scale(2)' }} />
        )}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{
              color: theme.palette.text.heading,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="p"
            gutterBottom
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            {Texts.aboutme}
          </Typography>
          <ButtonDiv>
            <CustomButton href={Urls.link.cv}>
              <Typography variant="p" color="white" fontWeight="100">
                Download CV
              </Typography>
            </CustomButton>
            <CustomButton
              style={{
                gap: "3px",
              }}
              href={Urls.link.linkedIn}
            >
              <Typography variant="p" color="white" fontWeight="100">
                Linked
              </Typography>
              <FontAwesomeIcon
                icon={faLinkedin}
                beat
                size="sm"
                style={{ color: "white" }}
              />
            </CustomButton>
          </ButtonDiv>
        </div>
      </Wapper>

    </RootContainer>
  );
}

export default AboutMe;
