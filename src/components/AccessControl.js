import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import styled from 'styled-components';
const AccessControl = (props) => {
  const { rule, type = 'inline' } = props;
  const [loading, setLoading] = useState(true);
  const [checkResult, setCheckResult] = useState(false);
  const state = useContext(UserContext);
  const { permission } = state;

  const sleep = (ms, cb) => new Promise(resolve => setTimeout(function () {
    cb();
    resolve();
  }, ms));
  useEffect(() => {
    sleep(3000, () => setLoading(false));
    sleep(2000, () => {
      if (permission.indexOf(rule) >= 0) {
        setCheckResult(true);
      }
    });
  }, [permission, rule]);

  const Button = styled.div`
    width:150px;
    height: 45px;
    line-height:45px;
    font-size:16px;
    margin: 15px;
    display:${props => props.type === 'inline' ? "inline-block" : "block"};
    background-color: ${props => props.checkResult ? "#52c41a" : "#f5222d"};
  `;

  if (loading) {
    return (
      <Button
        type={type}
        checkResult={checkResult}>权限校验中...</Button>
    );
  } else {
    if (checkResult) {
      return props.children;
    } else {
      return <Button
        type={type}
        checkResult={checkResult}>权限校验失败</Button>
    }
  }
};
export default AccessControl;