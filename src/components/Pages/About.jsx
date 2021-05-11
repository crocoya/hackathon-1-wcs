import React from 'react';
import './styles/About.css';
import Navigation from '../Navigation/Navigation';

export default function About() {
  return (
    <div className='About'>
      <Navigation />
      <div class='fade'></div>

      <section class='star-wars'>
        <div class='crawl'>
          <div class='title'>
            <p>Votre voyage</p>
            <h1>PARTIE I</h1>
          </div>

          <p>
            Notre vocation ? Simplifier vos déplacements, fluidifier le
            transport des personnes et des marchandises, et développer la
            mobilité de demain.
          </p>

          <p>
            La société mère SNCF assure la direction générale du Groupe. Elle
            abrite également des activités qui proposent leurs services à
            l'ensemble du Groupe SNCF : les Centres de services partagés qui
            viennent en soutien des activités du Groupe (aide sociale, services
            médicaux, paie, etc)
          </p>

          <p>
            Gérer, maintenir et développer le réseau ferré national, en donnant
            la priorité au réseau existant et plus particulièrement à
            l’Île-de-France, sont les principales missions de SNCF Réseau. Pour
            les mener à bien, l’entité s’articule autour de différents métiers :
            l’accès à l’infrastructure ferroviaire du réseau ferré national,
            comprenant la répartition des capacités et la tarification de cette
            infrastructure
          </p>
        </div>
      </section>
    </div>
  );
}
