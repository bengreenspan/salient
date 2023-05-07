import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Za from "./CustomerComp/Za";
import Aos from "aos";


const WeekCalendar = () => {
  return (
    <BS.Container>
      <h2 id="Weekly"></h2>
      <Container sx={{ pt: 10, pb: 10 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,

            display: "flex",
            justifyContent: "left",
          }}
        >
          <div
            className="fontbold"
            // data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h5"
              // className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
                Weekly Events
                <h4>04/03 - 04/08</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="monday"></span>
                        Monday
                      </h1>
                      <br />

                      <div className="links">
                        <div
                          className="lunch happenings"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <h2>Lunch Happenings:</h2>

                          <div className="links">
                            <a
                              target="_blank"
                              href="
                              https://groups.gsb.columbia.edu/osa/rsvp_boot?id=44014
                            "
                            >
                              Grab and Go! - First Gen
                              <p
                                style={{ fontStyle: "italic", fontWeight: 100 }}
                              >
                                by Office of Student Affairs
                              </p>
                            </a>

                            <h4 style={{ fontWeight: 100 }}>
                              {/* Kravis 820, &nbsp; */}
                              geffen 361, 12:15pm – 1:30pm (50+ attending)
                            </h4>
                          </div>

                          <br />
                        </div>
                      </div>

                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="tuesday"></span>
                        Tuesday
                      </h1>

                      <br />
                      <div>
                        <h2>Lunch Happenings:</h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=44011
                            "
                          >
                            Bryan Lawrence CSIMA Career talk
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Heilbrunn Center for Graham and Dodd Investing
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Kravis 680, 12:00pm – 1:00pm (75+ attending)
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/DFI/rsvp_boot?id=41856
                            "
                          >
                            DFI Lunch and Learn: Product Management Series with
                            Paankhuri Gupta '19 (Amazon)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Digital Future Initiative
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 390, 12:00pm – 1:45pm (waitlist)
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=42492
                            "
                          >
                            Fueling Male Allyship: Student Dialogues, Moderated
                            Lunch [PPIL] (Women's Week)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Women in Business (CWIB)
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 820, &nbsp; */}
                            Geffen 590 12:15pm – 1:45pm (100+ attending)
                            {/* (100+ attending) */}
                          </h4>
                          {/* <hr /> */}
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/silfen/rsvp_boot?id=43700
                            "
                          >
                            A Conversation with Gunjan Kedia, Vice Chair of U.S.
                            Bank Wealth Management and Investment Services
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Silfen Leadership Series
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 1090, &nbsp; 12:30pm – 1:30pm (100+
                            registered)
                            {/* (100+ attending) */}
                          </h4>
                        </div>
                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/ADT/rsvp_boot?id=43922
                            "
                          >
                            Technology & Global Security: A Conversation with
                            Jacob Helberg
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Aerospace & Defense Technology Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            {/* Kravis 420, */}
                            Geffen 620, 12:30pm – 1:45pm
                            {/* (100+ attending) */}
                          </h4>
                        </div>

                        <br />
                      </div>

                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/MiB/rsvp_boot?id=44316
                          "
                          >
                            MIB Alumni & Student Iftar
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Muslims in Business
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Kravis 1040, 6:30pm – 9:30pm
                            {/* (250+ attending) */}
                          </h4>
                        </div>
                        <br />
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                            https://groups.gsb.columbia.edu/seaba/rsvp_boot?id=46785
                            "
                        >
                          SEABA Spring Dinner
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Southeast Asian Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 420, */}
                          Chalong NYC, 7:00pm – 10:00pm
                          {/* (100+ attending) */}
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CSIMA/rsvp_boot?id=43867
                            "
                        >
                          [Investing in Asia series] Conversation with Tiffany
                          Hsiao, PM of the Artisan China Post-Venture Strategy
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Student Investment Management
                            Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 420, */}
                          Virtual, 8:30pm – 9:30pm
                          {/* (100+ attending) */}
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        {" "}
                        <span id="wednesday"></span>
                        Wednesday
                      </h1>
                      <br />
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/MGMT/rsvp_boot?id=44526
                          "
                        >
                          Technology Strategy Bonus Session - Rivian
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Management
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 870, 12:15pm – 1:45pm (75+ attending)
                        </h4>
                      </div>
                    </div>
                    <hr />
                    <br />
                    <div
                      className="afternoon"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 style={{ textDecoration: "none" }}>
                        Afterclass Happenings:
                      </h2>

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/JBSA/rsvp_boot?id=46932
    "
                        >
                          JBSA Passover Seder
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Jewish Business Students Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>6:30pm – 9:30pm</h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=41626
                          "
                        >
                          Investment Banking Club x Rugby Networking Event
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Men's Rugby Football Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 670, */}
                          {/* Geffen 620, */}
                          Jake's Dilemma, 8:30pm – 11:30pm
                          {/* (250+ attending) */}
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="thursday"></span>
                        Thursday
                      </h1>

                      <br />
                      <h2>Lunch Happenings:</h2>
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=43627
                          "
                        >
                          Celebrating CBS Perspectives: Student Clubs Connect,
                          Lunch Catered by Melba [PPIL] (Women's Week)
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Women in Business (CWIB)
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          {/* Kravis 440 */}
                          Geffen 320, 12:00pm – 1:45pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/HCGD/rsvp_boot?id=41809
                          "
                        >
                          Chris McIntyre Talk
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Heilbrunn Center for Graham and Dodd Investing
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440,
                          {/* CMC 7th Floor Geffen,  */}
                          12:00pm – 1:00pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=46704
                          "
                        >
                          AMA with Tech Journalists: Secrets of Tech Media and
                          How to Get Coverage for Your Startup
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 490, 12:15pm - 1:15pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CHAZ/rsvp_boot?id=44808
    "
                        >
                          Global Spotlight Lebanon
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Jerome A. Chazen Institute for Global
                            Business
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620, 12:15pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://sanfordbernsteincenter.org/civicrm/event/info?id=280&reset=1
"
                        >
                          Organizational Leadership Series: U.S. Attorney Damian
                          Williams (PPIL)
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen Hall, 12:30pm – 1:15pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/MILS/rsvp_boot?id=40734
"
                        >
                          Distinguished Speaker: Tony Malkin
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by The Paul Milstein Center for Real Estate
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 12:30pm – 1:30pm
                        </h4>
                      </div>

                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
    https://groups.gsb.columbia.edu/PEC/rsvp_boot?id=46706
"
                        >
                          Chat with H.I.G.'s Ross Hiatt
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Private Equity Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 440, 1:00pm – 1:45pm
                        </h4>
                      </div>

                      <hr />
                      <br />
                      <div
                        className="afternoon"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        <h2 style={{ textDecoration: "none" }}>
                          Afterclass Happenings:
                        </h2>

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=46693
"
                          >
                            Careers with CWiB: Alumni Networking Event, Evening
                            Reception (Women's Week)
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Columbia Women in Business (CWIB)
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            The Expat, 5:30pm – 7:30pm
                          </h4>
                        </div>

                        <br />

                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/StudGov/rsvp_boot?id=43372
"
                          >
                            CBS Social: End of the Year Extravaganza
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Student Government Executive Board
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            Ancell Plaza, 5:45pm - 7:30pm (350+ registered)
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
https://groups.gsb.columbia.edu/gourmet/rsvp_boot?id=46781
"
                          >
                            Taste of Culture: Chinese Dry Pot at MaLa Project
                            ft. Owner Amelie Kang
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Gourmet Club
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            MaLa Project 7:00pm – 9:00pm
                          </h4>
                        </div>

                        <br />
                        <div className="links">
                          <a
                            target="_blank"
                            href="
                            https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=44351
"
                          >
                            LABictoria
                            <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                              by Latin America Business Association
                            </p>
                          </a>

                          <h4 style={{ fontWeight: 100 }}>
                            La Victoria Social Club, 10:30pm – 4:30am (300+
                            registered)
                          </h4>
                        </div>
                      </div>
                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      // className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="friday"></span>
                        Friday
                      </h1>

                      <br />
                      {/* <h2>Morning Happenings:</h2> */}
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/CWIB/rsvp_boot?id=44736
                          "
                        >
                          Harlem Community Engagement: Friends of Morningside
                          Park Volunteer Event (Women's Week)
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Columbia Women in Business (CWIB)
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>9:00am - 11:00am )</h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      <br />
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="saturday"></span>
                        Saturday
                      </h1>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/RFC/rsvp_boot?id=43871
                          "
                        >
                          MBA Rugby World Cup
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Men's Rugby Football Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Tibbets Brook Park (150+ registered)
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Outdoors/rsvp_boot?id=43862
                          "
                        >
                          The Orchids Show at the NY Botanical Gardens
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Outdoors Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          NY Botanical Garden 10:30am - 2:30pm
                        </h4>
                      </div>

                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/LABA/rsvp_boot?id=43563
                          "
                        >
                          LABASADO Spring 2023
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Latin America Business Association
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Revson Plaza, 1:30am – 6:30pm
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
      </Container>
    </BS.Container>
  );
};
export default WeekCalendar;
