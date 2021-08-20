import React, { Component } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class CardBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card style={{ maxWidth: 300 }}>
        <CardActionArea>
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <CardMedia
              style={{
                height: 400,
                width: 150,
              }}
              image={this.props.img}
              title="Contemplative Reptile"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/dummy-panel/${this.props.id}`}>CUSTOMIZE</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
