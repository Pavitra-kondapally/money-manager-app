// Write your code here
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',

    displayText: 'Income',
  },

  {
    optionId: 'EXPENSES',

    displayText: 'Expenses',
  },
]

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {title, amount, id, activeTypeId} = transactionDetails

  const onDeleting = () => {
    deleteTransaction(id)
  }

  const activeType = transactionTypeOptions.find(
    eachType => eachType.optionId === activeTypeId,
  )

  const activeTypeText = activeType.displayText

  return (
    <li className="each-transaction-item">
      <div>
        <p className="list-details">{title}</p>
      </div>

      <hr className="separator" />

      <div>
        <p className="list-details">{amount}</p>
      </div>

      <hr className="separator" />

      <div className="last-column-container">
        <p>{activeTypeText}</p>

        <button className="delete-btn" onClick={onDeleting} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
