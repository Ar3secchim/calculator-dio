import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;

  display: flex;
  justify-content:center;
  align-items:center;

  background-color:#262626
`

export const Content = styled.div`
  padding: 18px;
  width:80%;
  min-height:350px;
  border-radius: 51px;
  box-shadow:  15px 15px 20px #212121,
               -15px -15px 20px #2b2b2b;
`

export const Row = styled.div`
  display:flex;
  flex-direction: row;
  gap: 12px;
  justify-content:space-between;
  align-items:center;
  margin-top:10px;
`
