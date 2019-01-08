// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Facebook SDK를 사용할 수 있는
window.fbAsyncInit = function() {
    FB.init({
      appId      : '166861210842547',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });

    // console.log('After FB.init()');
    //
    // FB.getLoginStatus(function(response) {
    //   statusChangeCallback(response);
    //   console.log(response)
    // });

  };
