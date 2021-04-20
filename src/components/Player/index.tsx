import React from 'react';

import styled from './styles.module.scss';

function Player(){
  return (
   <div className={styled.playerContainer}>
    <header>
      <img src="/playing.svg" alt="Tocando agora"/>
      <strong>Tocando agora</strong>
    </header>

    <div className={styled.emptyPlayer}>
      <strong>Selecione um podcast para ouvir</strong>
    </div>

    <footer className={styled.empty}>
      <div className={styled.progress}>
        <span>00:00</span>
        <div className={styled.slider}>
          <div className={styled.empySlider} />
        </div>
        <span>00:00</span>
      </div>

      <div className={styled.buttons}>
        <button type="button">
          <img src="/shuffle.svg" alt="Embaralhar"/>
        </button>
        <button type="button">
          <img src="/play-previous.svg" alt="Anterior"/>
        </button>
        <button type="button" className={styled.start}>
          <img src="/play.svg" alt="Tocar"/>
        </button>
        <button type="button">
          <img src="/play-next.svg" alt="Próxima"/>
        </button>
        <button type="button">
          <img src="/repeat.svg" alt="Repetir"/>
        </button>
      </div>

    </footer>
   </div>
  );
}

export default Player;