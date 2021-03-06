import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import PropTypes from 'prop-types';

import developer from "../../assets/images/developer.png";
import movers from "../../assets/images/movers.png";
import dungeon from "../../assets/images/dungeon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



// function SimpleDialog(props) {
//   const classes = useStyles();
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

  const projectsArray = [
    {
      img: dungeon,
      title: "Dungeon Master's Guide",
      description:
        "A website that allows you to track initiatives, players and monsters while you interact as a Dungeon Master for the popular game Dungeons and Dragons.",
      github: "https://github.com/Mcrouse42/initiate-dnd",
      deployed: "https://dungeon-masters-guide.herokuapp.com/",
    },
    {
      img: developer,
      title: "Developer Tracker",
      description:
        "A web application to track your progress as developer learning new technology.",
      github: "https://github.com/Mcrouse42/developer-tracker-1",
      deployed: "https://floating-reaches-76130.herokuapp.com/",
    },
    {
      img: movers,
      title: "Movers Not Shakers",
      description:
        "An application that allows you to view earthquakes in proximity to your location.",
      github: "https://github.com/Mcrouse42/movers-not-shakers",
      deployed: "https://jbeedle19.github.io/movers-not-shakers/",
    },
  ];

  

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={30} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {projectsArray.map((project) => (
          <GridListTile key={project.img}>
            <img src={project.img}></img>
            <GridListTileBar
              title={project.title}
              actionIcon={
                <IconButton
                  aria-label={`info about`}
                  className={classes.icon}
                >
                  <InfoIcon></InfoIcon>
                </IconButton>
              }
            />
            
          </GridListTile>
        ))}
      </GridList>
      
    </div>
  );
}

