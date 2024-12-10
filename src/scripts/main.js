import barba from '@barba/core';

import { initButtons } from './buttons.js';
import { initHamburger } from './hamburger.js';
import { initAnime } from './plugins/anime.js';
import { initBarba } from './plugins/barba.js';
import { initLocomotive } from './plugins/locomotive.js';
import { initProjects } from './projects.js';

window.addEventListener( 'load', () => {

  const scroller = initLocomotive();
  initBarba();
  initHamburger();
  initAnime();
  initProjects();
  initButtons();

  barba.hooks.after( () => {
    scroller.update();
    initHamburger();
    initAnime();
    initProjects();
    initButtons();
  } );

} );