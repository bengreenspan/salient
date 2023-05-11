import React from "react";
import EmailForm from "./FirstPage/EmailForm";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import Search from "./Search";
import Warning from "./Warning";
import { Divider } from "@mui/material";
import { inject } from "@vercel/analytics";

<Divider sx={{ m: 0, p: 0 }} />;

inject();

export const Main = () => (
  <div>
    <Warning/>
    <Search />
    <EmailForm />
    <div className="gray">
      <Form />
    </div>
    <div className="gray">
      <Faq />
    </div>
    <Contact />
  </div>
);
