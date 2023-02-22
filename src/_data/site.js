const site = {
  "title": "Web Team Documentation: Luddy Indianapolis",
  "site_url": "https://luddy.iupui.edu/idew",
  "base_url": "/idew",
  "environment": process.env.ELEVENTY_ENV,
  "socialMedia": [
    {
      "title": "Linked In for iDEW",
      "url": "",
      "type": "linkedin"
    },
    {
      "title": "Twitter for iDEW",
      "url": "",
      "type": "twitter"
    }
  ],
  builtAt: Date.now()
};

module.exports = function() {
  // use the URL that is set via an environment variable
  if (process.env.ELEVENTY_ENV != 'prod') {
    site.base_url = "";
  }

  return site;
};