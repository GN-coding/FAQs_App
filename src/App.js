import Faqs from './components/Faqs'

import './App.css'

const presentTechFaqs = [
  {
    id: 0,
    questionText: 'What is artificial intelligence (AI)?',
    answerText:
      'AI enables computers to perform tasks requiring human intelligence, such as speech recognition and decision-making.',
  },
  {
    id: 1,
    questionText: 'What is blockchain technology?',
    answerText:
      'Blockchain is a decentralized ledger technology used in cryptocurrencies and various other applications like supply chain management.',
  },
  {
    id: 2,
    questionText: 'What are the key features of 5G technology?',
    answerText:
      '5G offers faster speeds, lower latency, and increased capacity, enabling applications like autonomous vehicles and IoT.',
  },
  {
    id: 3,
    questionText: 'What are IoT devices and how are they used?',
    answerText:
      'IoT devices are interconnected devices that collect and exchange data over the internet, used in various fields such as smart home automation and industrial monitoring.',
  },
  {
    id: 4,
    questionText: 'What is cloud computing?',
    answerText:
      'Cloud computing delivers computing services over the internet, transforming IT infrastructure by enabling scalability, flexibility, and cost savings.',
  },
]

const App = () => <Faqs faqsList={presentTechFaqs} />

export default App
