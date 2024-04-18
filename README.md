In this project, building a **Faqs App**

### Refer to the video below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif" alt="faqs-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/faqs-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/faqs-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the plus icon is clicked in a FAQ
  - The answer to the FAQ should be visible to the user
  - The plus icon should change to a minus icon
- When the minus icon is clicked in a FAQ
  - The answer to the FAQ should be hidden to the user
  - The minus icon should change to a plus icon
- The `Faqs` component receives the `faqsList` as a prop. It consists of a list of faq objects with the following properties in each faq object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | questionText |  String   |
  |  answerText  |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/faqs-component-structure-breakdown.png" alt="faqs-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Faqs/index.js`
- `src/components/Faqs/index.css`
- `src/components/FaqItem/index.js`
- `src/components/FaqItem/index.css`
</details>
