import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutForm = () => {
  const [step, setStep] = useState(1); // Step 1: Contact Details, Step 2: Payment Details
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    method: 'credit',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2); // Move to Payment Details
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1); // Move back to Contact Details
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact details:', contactDetails);
    console.log('Payment details:', paymentDetails);
    // Add your submission logic here.
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        {step === 1 && (
          <>
            <div className="text-center mb-4">
              <h2 className="text-primary">Contact Details</h2>
            </div>
            <form onSubmit={handleNext}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={contactDetails.firstName}
                  onChange={handleContactChange}
                  name="firstName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={contactDetails.lastName}
                  onChange={handleContactChange}
                  name="lastName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={contactDetails.email}
                  onChange={handleContactChange}
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={contactDetails.phone}
                  onChange={handleContactChange}
                  name="phone"
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Next</button>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <div className="text-center mb-4">
              <h2 className="text-primary">Payment Details</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                <select
                  className="form-select"
                  id="paymentMethod"
                  name="method"
                  value={paymentDetails.method}
                  onChange={handlePaymentChange}
                >
                  <option value="credit">Credit/Debit Card</option>
                
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              {paymentDetails.method !== 'paypal' && (
                <>
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                      alt="Visa"
                      style={{ width: '50px', marginRight: '10px' }}
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                      alt="MasterCard"
                      style={{ width: '50px', marginRight: '10px' }}
                    />
                    
                  </div>

                  <div className="mb-3">
                    <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardholderName"
                      placeholder="Enter cardholder name"
                      value={paymentDetails.cardholderName}
                      onChange={handlePaymentChange}
                      name="cardholderName"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="Enter card number"
                      value={paymentDetails.cardNumber}
                      onChange={handlePaymentChange}
                      name="cardNumber"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={paymentDetails.expiryDate}
                      onChange={handlePaymentChange}
                      name="expiryDate"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      placeholder="Enter CVV"
                      value={paymentDetails.cvv}
                      onChange={handlePaymentChange}
                      name="cvv"
                      required
                    />
                  </div>
                </>
              )}

              {paymentDetails.method === 'paypal' && (
                <div className="d-flex justify-content-start align-items-center mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    style={{ width: '100px' }}
                  />
                </div>
              )}

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
