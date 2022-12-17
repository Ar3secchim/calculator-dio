import { useState } from "react";
import { Button } from "../components/Butoon";
import { Input } from "../components/input";
import { Container, Content, Row } from "./styles";

export function App() {
  const [currentNumber, setCurrentNumber] = useState("0")
  const [FirstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumbers = (num) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${num}`)
  }
  const handleRemoveNumbers = (num) => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if (FirstNumber == 0) {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(FirstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleRemNumbers = () => {
    if (FirstNumber == 0) {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const rem = Number(FirstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setOperation('')
    }
  }

  const handleMultipleNumbers = () => {
    if (FirstNumber == 0) {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multiple = Number(FirstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiple))
      setOperation('')
    }
  }

  const handleDividerNumbers = () => {
    if (FirstNumber == 0) {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const divider = Number(FirstNumber) / Number(currentNumber)
      setCurrentNumber(String(divider))
      setOperation('')
    }
  }
  
  const handlePercentNumbers = () => {
    if (FirstNumber == 0) {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    } else {
      const divider = Number(FirstNumber) * Number(currentNumber) /100
      setCurrentNumber(String(divider))
      setOperation('')
    }
  }

  const handleOperation = () => {
    if (FirstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleRemNumbers()
          break;
        case '*':
          handleMultipleNumbers()
          break;
        case '/':
          handleDividerNumbers()
          break;
        case '%':
          handleDividerNumbers()
          break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="%" onClick={handlePercentNumbers} />
          <Button label="/" onClick={handleDividerNumbers} />
          <Button label="*" onClick={handleMultipleNumbers} />
          <Button label="AC" onClick={() => handleRemoveNumbers()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumbers('7')} />
          <Button label="8" onClick={() => handleAddNumbers('8')} />
          <Button label="9" onClick={() => handleAddNumbers('9')} />
          <Button label="-" onClick={handleRemNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumbers('4')} />
          <Button label="5" onClick={() => handleAddNumbers('5')} />
          <Button label="6" onClick={() => handleAddNumbers('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumbers('1')} />
          <Button label="2" onClick={() => handleAddNumbers('2')} />
          <Button label="3" onClick={() => handleAddNumbers('3')} />
          <Button label="+/-" />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumbers('0')} />
          <Button label="." />
          <Button label="=" onClick={handleOperation} />

        </Row>

      </Content>
    </Container>
  )
}
