import React, { useEffect, useState } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import ReactGA from "react-ga";
import Search from "../Search";

const FirstContact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    Aos.init({});
  }, []);

  return (
    <div>
      <BS.Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
            pt: 20,
            pb: 30,
            pl: 0,
          }}
        >

          <BS.Row>
            <BS.Col lg={5} md={7} sm={7} xs={12}>
              <Search />
            </BS.Col>
          </BS.Row>
        </Box>
      </BS.Container>
    </div>
  );
};

export default FirstContact;
