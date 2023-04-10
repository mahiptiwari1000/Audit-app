import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


const CardForEntries = ({
  title,
  date,
  description
}) => {
  return (
    <>
     <div>
      <Card
        style={{
          width: 400,
          backgroundColor: "#9DC08B",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {date}
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
    </>
  );
};
export default CardForEntries;
