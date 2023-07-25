// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="tabs-container">
      <li className="balance-tab">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-in-tab"
          alt="balance"
        />

        <div>
          <p className="balance-text">Your Balance</p>

          <p className="balance-text">Rs {balanceAmount}</p>
        </div>
      </li>

      <li className="income-tab">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          className="image-in-tab"
          alt="income"
        />

        <div>
          <p className="income-text">Your Income</p>

          <p className="income-text">Rs {incomeAmount}</p>
        </div>
      </li>

      <li className="expenses-tab">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="image-in-tab"
          alt=" expenses"
        />

        <div>
          <p className="expenses-text">Your Expenses</p>

          <p className="expenses-text">Rs {expensesAmount}</p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
