import {Component} from 'react'
import './index.css'

export default class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
    inputPhraseLength: 0,
  }

  onInputPhraseChange = inputPhraseChangeEvent => {
    const userInput = inputPhraseChangeEvent.target.value
    const userInputCharacterCount = userInput.length

    this.setState({
      inputPhrase: userInput,
      inputPhraseLength: userInputCharacterCount,
    })
  }

  render() {
    const {inputPhrase, inputPhraseLength} = this.state

    return (
      <div className="letters-calculator-bg-container">
        <div className="letters-calculator-content-container">
          <h1 className="letters-calculator-content-header">
            Calculate the Letters you enter
          </h1>
          <div className="letters-calculator-phrase-input-container">
            <label
              htmlFor="userInput"
              className="letters-calculator-input-label"
            >
              Enter the phrase
            </label>
            <input
              id="userInput"
              className="letters-calculator-input"
              placeholder="Enter the phrase"
              name="user-input"
              value={inputPhrase}
              onChange={this.onInputPhraseChange}
            />
          </div>
          <p className="letters-count-text">
            No.of letters: {inputPhraseLength}
          </p>
        </div>
        <img
          className="main-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
