import React from 'react';
import { Link } from 'react-router-dom';
const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      minHeight: '100vh',
    },
    header: {
      color: '#333',
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    description: {
      color: '#666',
      fontSize: '1.2rem',
      marginBottom: '40px',
      textAlign: 'center',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      width: '100%',
      maxWidth: '600px',
    },
    listItem: {
      marginBottom: '30px',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#6200ea',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    itemDescription: {
      color: '#444',
      fontSize: '1rem',
      marginTop: '10px',
    }
  };

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Exemplos de Controle de Estado em React</h1>
      <p style={styles.description}>Selecione um dos exemplos abaixo para ver como cada abordagem funciona.</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/estado-global-context-api">
            <button style={styles.button}>Estado Global com Context API</button>
          </Link>
          <p style={styles.itemDescription}>
            Este exemplo demonstra como usar o Context API do React para gerenciar o estado global da aplicação, como o tema (claro/escuro).
          </p>
        </li>
        <li style={styles.listItem}>
          <Link to="/estado-global-redux">
            <button style={styles.button}>Estado Global com Redux</button>
          </Link>
          <p style={styles.itemDescription}>
            Este exemplo usa Redux para gerenciar o estado global da aplicação de maneira centralizada e mais escalável.
          </p>
        </li>
        <li style={styles.listItem}>
          <Link to="/estado-global-zustand">
            <button style={styles.button}>Estado Global com Zustand</button>
          </Link>
          <p style={styles.itemDescription}>
            Este exemplo mostra como usar Zustand, uma biblioteca leve, para gerenciar o estado global da aplicação de forma simples.
          </p>
        </li>
        <li style={styles.listItem}>
          <Link to="/estado-http">
            <button style={styles.button}>Estado HTTP com React Query</button>
          </Link>
          <p style={styles.itemDescription}>
            Este exemplo demonstra como gerenciar o estado de requisições HTTP utilizando React Query, acessando a API do GitHub.
          </p>
        </li>
        <li style={styles.listItem}>
          <Link to="/estado-local">
            <button style={styles.button}>Estado Local com Hooks</button>
          </Link>
          <p style={styles.itemDescription}>
            Este exemplo mostra como usar os hooks `useState` e `useReducer` do React para gerenciar o estado local de uma calculadora simples.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;