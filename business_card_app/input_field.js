function setCardDetails(event, elementId) {
    let value = event.currentTarget.value;
    let cardValue = document.getElementById(elementId);
    cardValue.innerHTML = value;
  }