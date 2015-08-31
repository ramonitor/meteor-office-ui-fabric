Package.describe({
  name: 'ramonitor:office-ui-fabric',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Office UI Fabric 1.0.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ramonitor/meteor-office-ui-fabric',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var files = [
    'stylesheets/fabric.min.css',
    'stylesheets/fabric.components.min.css'
  ];

  api.addFiles(files, 'client');

});
