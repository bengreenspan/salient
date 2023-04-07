import React, { useEffect, useState } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import companies from "./FirstPage/StockList.js";
import { useParams } from "react-router-dom";

const Stock = () => {
  const { urlParam } = useParams();
  const location = useLocation();
  const stockSymbol = location.pathname.slice(8);

  const company = companies.find((c) => c.symbol === stockSymbol);

  let companyName;
  if (company) {
    companyName = company.name;
  } else {
    companyName = "nope";
  }

  return (
    <BS.Container>
      <div>
        <Box sx={{ pt: 20, pb: 10, display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h2">
            <div
              className="fontbold"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              The {stockSymbol} page
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 5,
            pb: 20,
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <div>
            <div>
              <Container sx={{ mt: 5, mb: 10, justifyContent: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <BS.Row>
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <div data-aos="fade-right" data-aos-duration="1000">
                        <img src="/cbsoverhead.webp" width="400" height="300" />{" "}
                      </div>
                      <Box sx={{ mb: 10 }}></Box>
                    </BS.Col>
                    <br />
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <Typography align="right">
                        <h2 className="font">
                          <div data-aos="fade-left" data-aos-duration="1000">
                            {companyName}
                          </div>
                        </h2>
                      </Typography>
                    </BS.Col>
                  </BS.Row>
                  <br />
                  <br />
                  <br />
                </Box>
              </Container>
            </div>
          </div>
        </Box>
      </div>
    </BS.Container>
  );
};

export default Stock;
