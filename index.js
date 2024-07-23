;(function (exports) {
  function greet(name) {
    const options = {
      second: 'numeric',
      minute: 'numeric',
      hour: 'numeric',
      day: 'long',
      week: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'nymeric',



    }
    const a=0;
    let now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', options)
    return `Hello, ${name}! Today is ${formattedDate}.`
  }

  exports.greet = greet
})(this)