import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import { Document, Page, View } from '@react-pdf/renderer';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to app!</h1>
      </header>
      <main>
        <Document>
          <Page size="A4">
            <View style={{ width: '100%' }}></View>
          </Page>
        </Document>
      </main>
    </div>
  );
}

export default App;
