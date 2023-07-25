import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

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

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',

    amount: '',

    transactionList: [],

    activeTypeId: transactionTypeOptions[0].optionId,

    balanceAmount: 0,

    incomeAmount: 0,

    expensesAmount: 0,
  }

  onChangeType = event => {
    this.setState({activeTypeId: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSubmittingForm = event => {
    event.preventDefault()

    const {title, amount, activeTypeId, transactionList} = this.state

    const newTransaction = {
      id: uuidv4(),

      title,

      amount,

      activeTypeId,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],

      title: '',

      amount: '',

      activeTypeId: transactionTypeOptions[0].optionId,
    }))

    const expensesArray = transactionList.filter(
      eachItem => eachItem.activeTypeText === 'Expenses',
    )

    const expensesAmountCalc = expensesArray.reduce(
      (total, currentValue) => total + currentValue.amount,

      0,
    )

    const totalAmount = transactionList.reduce(
      (total, currentValue) => total + currentValue.amount,

      0,
    )

    const incomeAmountCalc = totalAmount - expensesAmountCalc

    const balanceAmountCalc = incomeAmountCalc - expensesAmountCalc

    this.setState({
      balanceAmount: balanceAmountCalc,

      incomeAmount: incomeAmountCalc,

      expensesAmount: expensesAmountCalc,
    })
  }

  deleteTransaction = id => {
    const {transactionList} = this.state

    const filteredTransaction = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      transactionList: filteredTransaction,
    })
  }

  render() {
    const {
      title,

      amount,

      transactionList,

      activeTypeId,

      balanceAmount,

      incomeAmount,

      expensesAmount,
    } = this.state

    return (
      <div className="container">
        <div className="profile-container">
          <h1 className="greeting-style">Hi, Richard</h1>

          <p className="desc-style">
            Welcome back to your{' '}
            <span className="app-style">Money Manager</span>
          </p>
        </div>

        <ul className="money-details-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </ul>

        <div className="transaction-container">
          <form className="transaction-form" onSubmit={this.onSubmittingForm}>
            <h1 className="transaction-heading">Add Transaction</h1>

            <label htmlFor="title-label" className="title-style">
              TITLE
            </label>

            <br />

            <input
              type="text"
              id="title-label"
              value={title}
              onChange={this.onChangeTitle}
            />

            <br />

            <label className="amount-style" htmlFor="amount-label">
              AMOUNT
            </label>

            <br />

            <input
              type="text"
              id="amount-label"
              value={amount}
              onChange={this.onChangeAmount}
            />

            <br />

            <label htmlFor="type-label">TYPE</label>

            <br />

            <select
              className="select-type-options"
              value={activeTypeId}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(eachType => (
                <option
                  key={eachType.optionId}
                  value={eachType.optionId}
                  className="option"
                >
                  {eachType.displayText}
                </option>
              ))}
            </select>

            <br />

            <button className="add-btn" type="submit">
              Add
            </button>
          </form>

          <div className="history-container">
            <h1 className="transaction-heading">History</h1>

            <ul className="transaction-table">
              <li className="table-header">
                <div>
                  <p className="list-heading-style">Title</p>
                </div>

                <hr className="separator" />

                <div>
                  <p className="list-heading-style">Amount</p>
                </div>

                <hr className="separator" />

                <div>
                  <p className="list-heading-style">Type</p>
                </div>
              </li>

              {transactionList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransaction={this.deleteTransaction}
                  activeTypeText={this.activeTypeText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
