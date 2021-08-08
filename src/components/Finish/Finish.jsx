import React from "react";
import  PropTypes from 'prop-types';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Finish.scss";

const Finish = ({ handleRestart, showModal, bestScore, moves }) => {
  return (
    <div>
      <Dialog
        open={showModal}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2>Memory Game</h2>
        <DialogTitle id="alert-dialog-title">
          Hurray !!! You completed the game !!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You got {moves} moves.Your best score is {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleRestart} color="primary">
            Restart
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Finish.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  Dialog: PropTypes.shape({
    showModal: PropTypes.bool.isRequired,
    disableEscapeKeyDown: PropTypes.bool,
  }),
  bestScore: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  isInactive: PropTypes.bool,
  isFlipped: PropTypes.bool, 
  isDisabled: PropTypes.bool,
};

export default Finish;