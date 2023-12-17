var quote = [
  {
    Text: '"Be yourself; everyone else is already taken."',
    Name: '--Oscar Wilde'
  },
  {
    Text: '"So many books, so little time."',
    Name: '--Frank Zappa'
  },
  {
    Text: '"A room without books is like a body without a soul."',
    Name: '--Marcus Tullius Cicero'
  },
  {
    Text: '"You only live once, but if you do it right, once is enough."',
    Name: '--Mae West'
  },
  {
    Text: '"Be the change that you wish to see in the world."',
    Name: '--Mahatma Gandhi'
  },
  {
    Text: '"If you tell the truth, you dont have to remember anything."',
    Name: '--Mark Twain'
  },
  {
    Text: '"Always forgive your enemies; nothing annoys them so much."',
    Name: '--Oscar Wilde'
  },
  {
    Text: '"I have not failed. I have just found 10,000 ways that wont work."',
    Name: '--Thomas A. Edison'
  },
  {
    Text: '"Do one thing every day that scares you."',
    Name: '--Eleanor Roosevelt'
  },
  {
    Text: '"A day without sunshine is like, you know, night."',
    Name: '--Steve Martin'
  },
]
var random_test;
function function_quote() {
  var random_num = Math.floor(Math.random() * quote.length);
  while (random_num == random_test) {
    random_num = Math.floor(Math.random() * quote.length)
  }
  random_test = random_num;
  document.querySelector('#text_quote').textContent = quote[random_num].Text;
  document.querySelector('#name_quote').textContent = quote[random_num].Name;
}