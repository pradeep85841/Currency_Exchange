import React from "react";
import { useState } from "react";
import "./Bodysection.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { AiOutlineSwap } from "react-icons/ai";

const resultStyle = {
  width: "50%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function Bodysection() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState("");

  const fetchApi = async () => {
    await fetch(`https://currencyexchange-bec7.onrender.com/convert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: `${from}`,
        to: `${to}`,
        amount: `${amount}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        let rate = data.amount;
        setResults(rate);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with fetch operation: ",
          error.message
        );
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <div>
      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>Welcome to Currency Exchange</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-emoji-smile"></i>
                      <span>Amount</span>
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                        value={amount}
                        type="number"
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-journal-richtext"></i>
                      <span>From</span>
                      <FormControl variant="filled" sx={{ minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                          select currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={from}
                          onChange={(e) => {
                            setFrom(e.target.value);
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="INR">INR</MenuItem>
                          <MenuItem value="KRW">KRW</MenuItem>
                          <MenuItem value="USD">USD</MenuItem>
                          <MenuItem value="EUR">EUR</MenuItem>
                          <MenuItem value="CNY">CNY</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-clock"></i>
                      <span>
                        <br></br>
                      </span>
                      <p>
                        <AiOutlineSwap
                          style={{ color: "#122e44", fontSize: "50px" }}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-award"></i>
                      <span>To</span>
                      <FormControl variant="filled" sx={{ minWidth: 220 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                          select currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={to}
                          onChange={(e) => {
                            setTo(e.target.value);
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="INR">INR</MenuItem>
                          <MenuItem value="KRW">KRW</MenuItem>
                          <MenuItem value="USD">USD</MenuItem>
                          <MenuItem value="EUR">EUR</MenuItem>
                          <MenuItem value="CNY">CNY</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                style={{ paddingLeft: "90px" }}
                className="col-lg-6 video-box align-self-baseline position-relative"
              >
                <List
                  sx={resultStyle}
                  component="nav"
                  aria-label="mailbox folders"
                >
                  <ListItem>
                    <ListItemText primary="Exchange Rate" />= {results}
                  </ListItem>
                  <Divider />
                  <ListItem divider>
                    <ListItemText primary="Exchange Amount" />={results}
                  </ListItem>
                  <Divider light />
                </List>
              </div>

              <div
                style={{ paddingLeft: "37%" }}
                className="col-lg-6 pt-3 pt-lg-0 content"
              >
                <Button onClick={handleSubmit} variant="contained" size="large">
                  convert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Bodysection;
