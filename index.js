;(function (exports) {
  function greet(name) {
    const options = {




      
      minute: 'numeric',
      hour: 'numeric',
      day: 'long',
      week: "numeric",
      month: 'long',
      year: 'numeric',
      weekday: "nymeric",
    }

    let now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', options);
    return `Hello, ${name}! Today is ${formattedDate}.`
  }

  exports.greet = greet;
})(this)
