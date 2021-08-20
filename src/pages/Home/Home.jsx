import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import Nav from "../../Nav/Nav.jsx";
import style1 from "../../Img/styles/1.woman_suitpants.webp";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Card style={{ maxWidth: 300 }}>
          <CardActionArea style={{}}>
            <div style={{ justifyContent: "space-around", display: "flex" }}>
              <CardMedia
                style={{
                  height: 430,
                  width: 150,
                }}
                image={style1}
                title="Contemplative Reptile"
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Customize
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
