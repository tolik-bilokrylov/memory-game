import React from "react";
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
import "./Header.scss";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>
      <h1 className="title">Memory Game</h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            <button
              className="button"
              onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

Header.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  bestScore: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
};

export default Header;
