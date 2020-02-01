//Podpora
(function() {
    var stripe = Stripe('pk_test_sifzp0ZLo4b6A5TLnU1U4o3p00Fg5O3uxB');
  
    var checkoutButton = document.getElementById('checkout-button-sku_Ge3K8chwvxpQHy');
    checkoutButton.addEventListener('click', function () {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        items: [{sku: 'sku_Ge3K8chwvxpQHy', quantity: 1}],
  
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://edunet.netlify.com/donate.html',
        cancelUrl: 'https://edunet.netlify.com/donate.html',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
})();
//Velká podpora
(function() {
    var stripe = Stripe('pk_test_sifzp0ZLo4b6A5TLnU1U4o3p00Fg5O3uxB');
  
    var checkoutButton = document.getElementById('checkout-button-sku_GePHfmEX9PTg9L');
    checkoutButton.addEventListener('click', function () {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        items: [{sku: 'sku_GePHfmEX9PTg9L', quantity: 1}],
  
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://edunet.netlify.com/donate.html',
        cancelUrl: 'https://edunet.netlify.com/donate.html',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();
//Chci přispět
(function() {
    var stripe = Stripe('pk_test_sifzp0ZLo4b6A5TLnU1U4o3p00Fg5O3uxB');
  
    var checkoutButton = document.getElementById('checkout-button-sku_GecNCDGNdX2SwV');
    checkoutButton.addEventListener('click', function () {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        items: [{sku: 'sku_GecNCDGNdX2SwV', quantity: 1}],
  
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://edunet.netlify.com/donate.html',
        cancelUrl: 'https://edunet.netlify.com/donate.html',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();