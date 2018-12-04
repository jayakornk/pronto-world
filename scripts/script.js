$(document).ready(function() {
  $('.choose-plan-btn').on('click', function(e) {
    e.preventDefault();
    var plan = $(this).parents('.plan');
    plan.siblings().removeClass('active');
    plan.addClass('active');

    $('.next-btn').removeAttr('disabled');
    $('.boxes p:last-child').css('cursor', 'auto');
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

  $('.hide-below').on('change', function() {
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
        } else {
          $('.next-btn').attr('disabled', '');
        }
      }
    );
  });
});
