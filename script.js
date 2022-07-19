const yearlyPrices = [199.99, 249.99, 399.99];
const monthlyPrices = [19.99, 24.99, 29.99];

const $sel1 = $(".pricing__value--1");
const $sel2 = $(".pricing__value--2");
const $sel3 = $(".pricing__value--3");

$('input[type="checkbox"]').click(function () {
  if ($(this).prop("checked") == true) {
    $sel1.text(monthlyPrices[0]);
    $sel2.text(monthlyPrices[1]);
    $sel3.text(monthlyPrices[2]);
  } else if ($(this).prop("checked") == false) {
    $sel1.text(yearlyPrices[0]);
    $sel2.text(yearlyPrices[1]);
    $sel3.text(yearlyPrices[2]);
  }
});
