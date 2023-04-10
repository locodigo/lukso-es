import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

import Box from '../components/Box';
import CallToActionButton from '../components/CallToActionButton';
import Headline from '../components/Headline';

import NetworksIcon from '../../static/img/icons/icon-networks-gradient.png';
import StandardsIcon from '../../static/img/icons/icon-standards-gradient.png';
import ToolsIcon from '../../static/img/icons/icon-tools-gradient.png';
import GuidesIcon from '../../static/img/icons/icon-guides-gradient.png';
import FAQIcon from '../../static/img/icons/icon-faq-gradient.png';

function Index() {
  return (
    <Layout description="Redes, Estándares, Guías y Herramientas para desarrollar en LUKSO.">
      <div className={styles.container}>
        <Headline />
        <CallToActionButton
          bgColor="#6270A4"
          color="#ffffff"
          link="./es/guides/browser-extension/install-browser-extension"
          text="DESCARGA LA EXTENSIÓN PARA EL NAVEGADOR"
        />
        <br />
        <CallToActionButton
          bgColor="#FFCCCC"
          color="#383838"
          link="./es/networks/l16-testnet/parameters"
          text="PARTICIPA EN LAS REDES"
        />
        <br />
        <div className={styles.cardContainer}>
          <Box
            icon={NetworksIcon}
            link="./es/networks/l16-testnet/parameters"
            title="REDES"
            className="networks"
            content="Descubre cómo participar en las redes de prueba LUKSO."
          />
          <Box
            icon={StandardsIcon}
            link="./es/standards/introduction"
            title="ESTÁNDARES"
            className="standards"
            content="Aprende más sobre los nuevos estándares de contratos inteligentes que cambiarán la forma en que interactuamos con la Blockchain."
          />
          <Box
            icon={ToolsIcon}
            link="./es/tools/getting-started"
            title="HERRAMIENTAS"
            className="tools"
            content="Encuentra herramientas que te ayudarán a interactuar con los Perfiles Universales y los NFT2.0."
          />
        </div>
        <div className={styles.cardContainer}>
          <Box
            icon={GuidesIcon}
            link="./es/guides/getting-started"
            title="GUÍAS"
            className="guides"
            content="Guías y tutoriales que te ayudarán a descubrir el ecosistema LUKSO."
          />
          <Box
            icon={FAQIcon}
            link="./es/faq/lukso"
            title="PREGUNTAS FRECUENTES"
            className="faq"
            content="Las preguntas más frecuentes."
          />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
