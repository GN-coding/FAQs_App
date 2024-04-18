import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    showAnswer: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {showAnswer} = this.state

    return (
      <div>
        <li className="item-card">
          <div className="con">
            <p>{faqsList.questionText}</p>
            <img
              src={
                showAnswer
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={showAnswer ? 'minus-icon' : 'plus-icon'}
              onClick={this.toggleAnswer}
              className="img"
            />
          </div>

          {showAnswer && (
            <div>
              <hr /> <p>{faqsList.answerText}</p>{' '}
            </div>
          )}
        </li>
      </div>
    )
  }
}

export default FaqItem
