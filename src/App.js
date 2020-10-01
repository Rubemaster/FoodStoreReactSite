import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "./Elements/NewNavbar.js";
import { BannerImage } from "./Elements/BannerImage.js";
import { ButtonRow } from "./Elements/ButtonRow.js";
import { LinkAndIconRow } from "./Elements/LinkAndIconRow.js";
import * as Icons from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => (
  <div className="App">
    <Navbar
      layout={[
        {
          type: "link",
          link: { name: "Handla online", url: "#1" }
        },
        {
          type: "link",
          link: { name: "Erbjudanden", url: "#2" }
        },
        {
          type: "link",
          link: { name: "ICAs matkasse", url: "#2" }
        },
        {
          type: "link",
          link: { name: "Hitta butik", url: "#2" }
        },
        {
          type: "link",
          link: { name: "Recept", url: "#2" }
        },
        {
          type: "link",
          link: { name: "Hälsa", url: "#2" }
        },
        {
          type: "link",
          link: { name: "Buffé", url: "#2" }
        },
        {
          type: "link",
          link: { name: "Kundservice", url: "#2" }
        }
      ]}
    />
    <BannerImage />
    <div className="position-absolute" style={{ top: "60%", width: "100%" }}>
      <div
        className="position-absolute"
        style={{ top: "-30px", width: "100%" }}
      >
        <LinkAndIconRow
          layout={[
            {
              type: "link",
              icon: <Icons.GeoAltFill />,
              link: { name: "HITTA BUTIK", url: "s that" }
            },
            {
              type: "link",
              icon: <Icons.CartFill />,
              link: { name: "HANDLA ONLINE", url: "s that" }
            },
            {
              type: "link",
              icon: <Icons.BagFill />,
              link: { name: "VÅR MATKASSE", url: "s that" }
            },
            {
              type: "link",
              icon: <Icons.Heart />,
              link: { name: "APOTEK", url: "s that" }
            },
            {
              type: "link",
              icon: <Icons.Wallet />,
              link: { name: "BANK", url: "s that" }
            }
          ]}
        />
        <ButtonRow
          layout={[
            {
              type: "link",
              link: { name: "Medlem hos oss", url: "s that" }
            },
            {
              type: "link",
              link: { name: "Din bonus", url: "s that" }
            },
            {
              type: "link",
              link: { name: "Ditt saldo", url: "s that" }
            },
            {
              type: "link",
              link: { name: "Partner erbjudanden", url: "s that" }
            },
            {
              type: "link",
              link: { name: "ICA Försäkring", url: "s that" }
            },
            {
              type: "link",
              link: { name: "Appar och tjänster", url: "s that" }
            }
          ]}
        />
      </div>
    </div>
  </div>
);
