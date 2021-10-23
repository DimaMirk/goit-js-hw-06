const refs = {
  valueEll: document.querySelector('span'),
  btnDecrement: document.querySelector("[data-action='decrement']"),
  btnIncrement: document.querySelector("[data-action='increment']"),
};

const { valueEll, btnDecrement, btnIncrement } = refs;

const count = {
  counterValue: 0,
  increment: function (params) {
    this.counterValue += 1;
    valueEll.textContent = this.counterValue;
  },
  decrement: function (params) {
    this.counterValue -= 1;
    valueEll.textContent = this.counterValue;
  },
};

btnDecrement.addEventListener('click', function (params) {
  count.decrement();
});
btnIncrement.addEventListener('click', function (params) {
  count.increment();
});
