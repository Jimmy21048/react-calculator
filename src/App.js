import { useState } from "react"
import './App.css'

export default function App() {
  const [ans, setAns] = useState('');
  function handleClick(num) {
    if(ans) {
      setAns('');
    }
    setAns(ans+num);
  }
  function handleAns(num) {
    if(num==='=') {
      setAns(eval(ans))
    }
    else if(num==='C') {
      setAns('');
    }
    else if(num==='Del') {
      setAns(ans.slice(0,-1))
    }
  }

  return (
    <div className="app">
      <div className="screen">
        <Display
        value={ans}
         />
      </div>
      <div className="buttons">
        <div className="row">
          <SpecialButton
          value='C'
          handleAns={() => handleAns('C')}  />
          <Button
          value='()'
          handleClick={() =>handleClick('(')} />
          <Button
          value='%'
          handleClick={() =>handleClick('%')} />
          <Button
          value='/'
          handleClick={() =>handleClick('/')} />
        </div>
        <div className="row">
          <Button
          value='7'
          handleClick={() =>handleClick(7)} />
          <Button
          value='8'
          handleClick={() =>handleClick(8)} />
          <Button
          value='9'
          handleClick={() =>handleClick(9)} />
          <Button
          value='X'
          handleClick={() =>handleClick('*')} />
        </div>
        <div className="row">
          <Button
          value='4'
          handleClick={() =>handleClick(4)} />
          <Button
          value='5'
          handleClick={() =>handleClick(5)} />
          <Button
          value='6'
          handleClick={() =>handleClick(6)} />
          <Button
          value='-'
          handleClick={() =>handleClick('-')} />
        </div>
        <div className="row">
          <Button
          value='1'
          handleClick={() =>handleClick(1)} />
          <Button
          value='2'
          handleClick={() =>handleClick(2)} />
          <Button
          value='3'
          handleClick={() =>handleClick(3)} />
          <Button
          value='+'
          handleClick={() =>handleClick('+')} />
        </div>
        <div className="row">
          <SpecialButton
          value='Del'
          handleAns={() => handleAns('Del')}  />
          <Button
          value='0'
          handleClick={() =>handleClick(0)} />
          <Button
          value='.'
          handleClick={() =>handleClick('.')} />
          <SpecialButton
          value='='
          handleAns={() =>handleAns('=')} />
        </div>
      </div>

    </div>
  )
}
function Button({value,handleClick}) {
  return (
    <button
    onClick={handleClick} >
      {value}
    </button>
  )
}
function SpecialButton({value, handleAns}) {
  return (
    <button
    onClick={handleAns} >
      {value}
    </button>
  )
}
function Display({value,handleChange}) {
  return (
    <input
    id="input"
    value={value} />
  )
}