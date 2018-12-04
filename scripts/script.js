$(document).ready(function() {
  if (window.location.pathname === '/sign-up.html') {
    $('form').on('submit', function(e) {
      console.log($(this).serialize());
      e.preventDefault();
    });
  }

  $('.choose-plan-btn').on('click', function(e) {
    e.preventDefault();
    var plan = $(this).parents('.plan');
    plan.siblings().removeClass('active');
    plan.addClass('active');

    $('.next-btn').removeAttr('disabled').removeClass('disabled');
    // $('.boxes p:last-child').css('cursor', 'auto');
  });

  $('.gift-code-submit').on('click', function() {
    var input = $('.gift-code-input');
    var msg =
      '<i class="fas fa-exclamation-circle"></i> Sorry, you entered an invalid gift code';
    var bcolor = '#f00';

    if (input.val() === 'correct') {
      msg =
        '<i class="fas fa-check-circle"></i> Great, discounts have been applied';
      bcolor = '#0f0';
    }
    input.css('border-color', bcolor);
    $('.gift-code-status').html(msg);
  });

  $('#cardNumber').formatCardNumber();
  $('#cardExpire').formatCardExpiry();
  $('#cardCvv').formatCardCVC();

  $('#notnow').on('change', function() {
    $('.plans').animate(
      {
        height: 'toggle',
        opacity: 'toggle'
      },
      500,
      'linear',
      function() {
        if ($(this).css('display') === 'none') {
          $('.next-btn').removeAttr('disabled');
          $('.next-btn').removeClass('disabled');
        } else {
          $('.next-btn').attr('disabled', '');
          $('.next-btn').addClass('disabled');
        }
      }
    );
  });

  $('#confirmPayment').on('change', function() {
    var btn = $('.complete-transaction-btn');
    if (btn.attr('disabled')) {
      btn.removeAttr('disabled').removeClass('disabled');
    } else {
      btn.attr('disabled', '').addClass('disabled')
    }
  });
});
