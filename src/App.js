import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccessControl from './components/AccessControl';
import styled from 'styled-components';
function App() {
  const Button = styled.div`
    width:100px;
    height:45px;
    line-height:45px;
    font-size:16px;
    background-color:orange;
  `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AccessControl type="inline" rule="save-btn"><Button>保存按钮</Button></AccessControl>
        <AccessControl type="inline" rule="update-btn"><Button>更新按钮</Button></AccessControl>
      </header>
    </div>
  );
}

export default App;
