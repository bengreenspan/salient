import React from "react";
import EmailForm from "./FirstPage/EmailForm";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import { Divider } from "@mui/material";
import { inject } from '@vercel/analytics';



<Divider sx={{ m: 0, p: 0 }} />;

inject();


export const Main = () => (
  <div>
    <Title />

    {/* <div className="dfirstbutton"> */}
      <FirstContact />
    {/* </div> */}
    <EmailForm />
    {/* <CalendarOver /> */}
    <div className="gray">

      {/* <Customers /> */}
      <Form />
    </div>

    {/* <Map /> */}
    {/* </div> */}
    {/* <Carousel /> */}


    <div className="gray">
      <Faq />
    </div>
    <Contact />
  </div>
);



