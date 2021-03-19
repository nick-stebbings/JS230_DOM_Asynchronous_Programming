let value;

$('form').submit((e) => {
  e.preventDefault();
  value = $('#key').val();
})

$('a').click((e) => {
  e.preventDefault();
  console.log($("#accordion"));
  $("#accordion").slideToggle();
})

$(document)
  .off("keypress")
  .on("keypress", (e) => {
    if (e.key !== value) {
      return;
    }
    $("a").trigger('click');
  });

  let posts = [{
    title: "Lorem ipsum dolor sit amet",
    published: "April 1, 2015",
    tags: ['Ace', 'Mega', 'Fab'],
    body:
      "<em>Sed</em> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },{
    title: "Cheese Whizz",
    published: "April 1, 2011",
    body:
      "voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  }];

  let template = Handlebars.compile($("#post").html());
Handlebars.registerPartial('tag', $('#tag').html());

  $('#accordion > p').html(template({posts: posts}));