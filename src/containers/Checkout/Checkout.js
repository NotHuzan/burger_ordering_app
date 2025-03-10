import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = (
      <div>
        <CheckoutSummary ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />

        {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData}/> */}

        <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
      </div>);

    if (!this.props.ingredients) {
      summary = <Redirect to='/' />;
    }

    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price
  }
}

export default connect(mapStateToProps)(Checkout);