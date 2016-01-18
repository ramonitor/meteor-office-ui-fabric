Package.describe({
  name: 'ramonitor:office-ui-fabric',
  version: '0.0.3',
  summary: 'Office UI Fabric 1.2.1',
  git: 'https://github.com/ramonitor/meteor-office-ui-fabric',
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
