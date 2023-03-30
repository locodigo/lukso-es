import React from 'react';
import styles from './Headline.module.scss';

export default function Headline() {
  return (
    <div className={`${styles.headline} headline`}>
      <h1 style={{ fontWeight: 'normal', lineHeight: '1.1rem' }}>
        Bienvenido a la 
      </h1>
      <h1 style={{ fontWeight: 'bold' }}>Documentación de LUKSO</h1>
    </div>
  );
}
