import React, { useState } from "react";
import "./Task.css";
import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import MomentUtils from "@date-io/moment";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function Task() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div
      style={{
        backgroundColor: "#e8f3fe",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "810px",
        margin: "50px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Grid
        style={{
          margin: "10px auto",
        }}
      >
        <Card
          style={{
            maxWidth: "400",
            padding: "20px 5px",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <div
              style={{
                color: "#003979",
                fontWeight: "800",
                fontSize: "2em",

                paddingBottom: "20px",
              }}
            >
              Task Manager
            </div>

            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Task title"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Task Description"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label="Date"
                      format="MM/dd/yyyy"
                      placeholder="Date"
                      value={selectedDate}
                      InputAdornmentProps={{ position: "end" }}
                      onChange={(date) => handleDateChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <div
        style={{
          color: "#003979",
          fontWeight: "800",
          fontSize: "2em",
          paddingTop: "40px",
          paddingBottom: "20px",
        }}
      >
        Your Tasks
      </div>
      <Grid>
        <Card
          style={{
            maxWidth: 800,
            margin: "0 auto 10px",
            borderRadius: "5px",
          }}
        >
          <CardContent style={{ padding: "10px" }}>
            <Grid container>
              <Grid item xs={12} md={7} styel={{ marginLeft: "0px" }}>
                <div
                  style={{
                    color: "#003979",
                    fontWeight: "600",
                    fontSize: "1em",
                    marginLeft: "0px",
                  }}
                >
                  1. Completing Assignment on time...
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#003979",
                    color: "#ffffff",
                    marginRight: "10px",
                    padding: "3px 15px",
                  }}
                >
                  Complete
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#D60707",
                    color: "#ffffff",
                    padding: "3px 15px",
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card
          style={{
            maxWidth: 800,
            margin: "0 auto 10px",
            borderRadius: "5px",
          }}
        >
          <CardContent style={{ padding: "10px" }}>
            <Grid container>
              <Grid item xs={12} md={7} styel={{ marginLeft: "0px" }}>
                <div
                  style={{
                    color: "#003979",
                    fontWeight: "600",
                    fontSize: "1em",
                    marginLeft: "0px",
                  }}
                >
                  2. Submitting assignment to Sir...
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#003979",
                    color: "#ffffff",
                    marginRight: "10px",
                    padding: "3px 15px",
                  }}
                >
                  Complete
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#D60707",
                    color: "#ffffff",
                    padding: "3px 15px",
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
