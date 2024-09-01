document.addEventListener("alpine:init", function () {
  Alpine.data("card", function () {
    return {
      name: "",
      phone_number: "",
      address: "",
      not_is_valid_number() {
        return isNaN(this.phone_number);
      },
    };
  });
});
