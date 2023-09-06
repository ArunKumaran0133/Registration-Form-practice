import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    lastNameError: false,
    firstNameError: false,
  }

  getFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  getLastName = event => {
    this.setState({lastName: event.target.value})
  }

  checkFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  checkLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.checkFirstName()
    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.checkLastName()
    this.setState({lastNameError: !isValidLastName})
    console.log(isValidLastName)
  }

  onFormSubmit = event => {
    event.preventDefault()
    const isValidFirstName = this.checkFirstName()
    const isValidLastName = this.checkLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  submitAnotherForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isFormSubmitted: false,
      lastNameError: false,
      firstNameError: false,
    })
  }

  isFormSubmittedFunction = () => (
    <div className="submitted-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submitted-successfully-msg">Submitted Successfully</p>
      <button
        type="button"
        className="success-btn"
        onClick={this.submitAnotherForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {firstNameError, lastNameError, isFormSubmitted} = this.state
    const firstNameClassName = firstNameError ? 'error-msg' : null
    const lastNameClassName = lastNameError ? 'error-msg' : null
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? (
          this.isFormSubmittedFunction()
        ) : (
          <form className="form-container" onSubmit={this.onFormSubmit}>
            <div className="input-container">
              <label htmlFor="firstName" className="label">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstName"
                className="input"
                placeholder="First Name"
                onChange={this.getFirstName}
                onBlur={this.onBlurFirstName}
              />
              {firstNameError ? (
                <p className={firstNameClassName}>Required</p>
              ) : null}
            </div>
            <div className="input-container">
              <label htmlFor="lastName" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastName"
                className="input"
                placeholder="Last Name"
                onChange={this.getLastName}
                onBlur={this.onBlurLastName}
              />
              {lastNameError ? (
                <p className={lastNameClassName}>Required</p>
              ) : null}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
