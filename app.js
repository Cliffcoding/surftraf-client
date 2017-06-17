const DATABASE_URL = 'http://localhost:3000/api/v1/surfer';

$(appReady);

function appReady() {
  getSurfers().then(showSurfers);

}


function getSurfers() {
  return $.get(DATABASE_URL);
}

function showSurfers(surfers) {
  const source = $("#surfer-template").html();
  console.log(source);
  const template = Handlebars.compile(source);
  const html = template({
    surfers
  });
  console.log(surfers);
    console.log(surfers[0].email);
  $('main').append(html);
}

  $('body').on('click', '.email', function () {
    let text = $(this).text();
    console.log('hella what. ' + text);
    //alert( "Handler for .click() called." );
  })
