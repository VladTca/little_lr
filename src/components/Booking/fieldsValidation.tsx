const emailRegex = /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0+]?[0-9]{10}$/im;

function validateEmail(val: string) {
  return emailRegex.test(val);
};

function validatePhone(val: string) {
  return phoneRegex.test(val);
};

export { validateEmail, validatePhone };