(function(){
  'use strict';

  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/user",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(user) {
      displayUser(user);

});

  });

function displayUser(user){
  console.log(user);
  $('.personalInfo').prepend(JST['users'](user));

}

$(document).ready(function(){
  $.ajax({
    url: "https://api.github.com/user/repos",
    headers: {
      "Authorization": "token " + GITHUB_TOKEN
    }
  }).then(function(repo) {
    displayRepos(repo);
  });

    });

  function displayRepos(repo){
    console.log(repo);
    $('.repositories').prepend(JST['repos'](repo));

  }




  // $(document).ready(function(e){
  //   var code = window.location.href.match(/\?code=(.*)/)[1];
  //   if(code) {
  //     $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
  //      console.log(data);
  //     });
  //   }
  // });
  //
  // $('button').on('click', function(e){
  //   window.location.replace('https://github.com/login/oauth/authorize?client_id=88f517053a613d549799');
  // });




})();
