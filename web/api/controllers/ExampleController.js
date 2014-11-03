var path = require('path');

module.exports = {

  one: function (req, res) {
/* vcl:
vcl 4.0; backend default { .host = "www.vclfiddle.net"; .port = "80"; }

sub vcl_backend_response {
  if (beresp.http.Content-Type ~ "^image/") {
    set beresp.http.Cache-Control = "public, max-age=300";
    set beresp.ttl = 300s;
    return (deliver);
    }
}
*/
/* curl:
curl "http://www.vclfiddle.net/"
*/
    req.session = null; // don't send Set-Cookie: sails.sid=
    return res
      .header('Link', '<https://www.flickr.com/photos/crazymandi/8165527856/>; rel=alternate')
      .header('Cache-Control', 'public, max-age=0')
      .sendfile(path.join(__dirname, 'flickr-crazymandi-puppy.jpg'));
  }

}