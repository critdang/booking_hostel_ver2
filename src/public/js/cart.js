let check = false;
const quantity = {};

function changeVal(el) {
  const qt = parseFloat(el.parent().children('.qt').html());
  const price = parseFloat(el.parent().children('.price').html());
  const eq = Math.round(price * qt * 100) / 100;

  el.parent().children('.full-price').html(`${eq}$`);

  changeTotal();
}

function changeTotal() {
  let price = 0;

  $('.full-price').each((index) => {
    price += parseFloat($('.full-price').eq(index).html());
  });

  price = Math.round(price * 100) / 100;
  const tax = Math.round(price * 0.05 * 100) / 100;
  let fullPrice = Math.round((price + tax) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $('.subtotal span').html(price);
  $('.tax span').html(tax);
  $('.total span').html(fullPrice);
}

$(document).ready(() => {
  $('.remove').click(function () {
    const el = $(this);
    const id = $(this).attr('id');
    quantity[id] = false;
    el.parent().parent().addClass('removed');
    window.setTimeout(() => {
      el.parent().parent().slideUp('fast', () => {
        el.parent().parent().remove();
        if ($('.product').length == 0) {
          if (check) {
            $('#cart').html("<h1>your order is pending</h1><a class='nav-link' href='/order'>click here to see your order<a>");
          } else {
            $('#cart').html('<h1>No products!</h1>');
          }
        }
        changeTotal();
      });
    }, 200);
  });

  $('.qt-plus').click(function () {
    $(this).parent().children('.qt').html(parseInt($(this).parent().children('.qt').html()) + 1);
    const id = $(this).parent().children('.qt').attr('id');
    quantity[id] += 1;
    $(this).parent().children('.full-price').addClass('added');

    const el = $(this);
    window.setTimeout(() => { el.parent().children('.full-price').removeClass('added'); changeVal(el); }, 150);
  });

  $('.qt-minus').click(function () {
    child = $(this).parent().children('.qt');

    if (parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
      const id = $(this).parent().children('.qt').attr('id');
      quantity[id] -= 1;
    }

    $(this).parent().children('.full-price').addClass('minused');

    const el = $(this);
    window.setTimeout(() => { el.parent().children('.full-price').removeClass('minused'); changeVal(el); }, 150);
  });

  window.setTimeout(() => { $('.is-open').removeClass('is-open'); }, 1200);

  $('.btn').click(() => {
    check = true;
    const total = $('.total span').text();
    const userId = $('#userId').val();
    $.post('/cart/checkout', {
      total, userId, quantity,
    });
    $('.remove').click();
  });
});
$(window).on('load', function () {
  changeVal($(this));
  const qt = $('.qt').length;
  // var qts = $('.qt').map(function () {
  //     return $.trim($(this).text());
  // }).get()
  // qts = qts.map(function (x) {
  //     return parseInt(x);
  // });

  const ids = $('.qt').map(function () {
    return $.trim($(this).attr('id'));
  }).get();
  for (let i = 0; i < qt; i++) {
    const id = ids[i];
    quantity[id] = 0;
  }
});
