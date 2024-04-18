import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-con">
        <h1 className="main-head">FAQs</h1>
        <div className="faq-card">
          <ul>
            {faqsList.map(each => (
              <FaqItem faqsList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
