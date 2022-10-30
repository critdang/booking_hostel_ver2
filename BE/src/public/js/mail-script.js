// -------   Mail Send ajax

$(document).ready(() => {
  const form = $('#myForm'); // contact form
  const submit = $('.submit-btn'); // submit button
  const alert = $('.alert-msg'); // alert div for show alert message

  // form submit event
  form.on('submit', (e) => {
    e.preventDefault(); // prevent default form submit

    $.ajax({
      url: 'mail.php', // form action url
      type: 'POST', // form submit method get/post
      dataType: 'html', // request type html/json/xml
      data: form.serialize(), // serialize form data
      beforeSend() {
        alert.fadeOut();
        submit.html('Sending....'); // change submit button text
      },
      success(data) {
        alert.html(data).fadeIn(); // fade in response data
        form.trigger('reset'); // reset form
        submit.attr('style', 'display: none !important'); // reset submit button text
      },
      error(e) {
        console.log(e);
      },
    });
  });
});
