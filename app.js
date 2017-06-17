const SURFERDB_URL = 'http://localhost:3000/api/v1/surfer';
const BREAKDB_URL = 'http://localhost:3000/api/v1/break';

$(appReady);

function appReady() {
  getSurfers().then(showSurfers);
  getBreaks().then(showBreaks)
  //getSurfers().then(showSurferInfo)

}


function getSurfers() {
  return $.get(SURFERDB_URL);
}
function getBreaks() {
  return $.get(BREAKDB_URL);
}

function showSurfers(surfers) {
  const source = $("#surfer-template").html();
  //console.log(source);
  const template = Handlebars.compile(source);
  const html = template({
    surfers
  });
  $('#surfer-list').append(html);

}

function showBreaks(breaks) {
  const source = $("#break-template").html();
  //console.log(source);
  const template = Handlebars.compile(source);
  const html = template({
    breaks
  });
  $('#break-list').append(html);
}

// function showSurfersInfo(surfers){
// $('#surfer-list').on('click', function() {
//   const source = $("#surferInfo-template").html();
//   console.log(source);
//   const template2 = Handlebars.compile(source);
//   const html = template({
//     surfer
//   });
//   console.log(this);
//     //console.log(surfers[0].email);
//   //$('main').append(html);
//   $('#surfer-info').append(html);
// })
// }

  $('body').on('click', '.email', function () {
    let text = $(this).text();
    console.log($(this).data('id'));
    $clone = $(this).clone( true )
    $('#surfer-info').append($clone);
    //console.log('hella what. ' + text);

    //alert( "Handler for .click() called." );
  })
  $('body').on('click', '.name', function () {
    let text = $(this).text();
    console.log($(this).data('id'));
    $('#break-info').append(this);
    //console.log('hella what. ' + text);

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
