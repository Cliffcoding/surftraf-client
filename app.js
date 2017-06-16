const DATABASE_URL = 'http://localhost:3000/api/v1/surfer';

$(appReady);

function appReady() {
  // const source = $("#entry-template").html();
  // console.log(source);
  // const template = Handlebars.compile(source);
  // console.log(template);
  // const context = {
  //   title: 'My New Post',
  //   body: 'This is my first post!'
  // };
  // const html = template(context);
  // $('main').append(html);

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
