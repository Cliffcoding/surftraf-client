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

  // Initialize collapse button
 $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
 $('.collapsible').collapsible();
 // Show sideNav
