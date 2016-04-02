var docbaseConfig = {
  "method": "github",
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "farhan687",
    "repo": "redis",
    "path": "source",
    "branch": "master",
    "access_token": "MzNlYmQ5NzA3NWQyODAyZGZiZDE2ZjBiZjkzMGViZWI0NmU5MDVjNQ=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "default_version": "",
  "manual_override": false,
  "versions" : {
  "v1": [
    {
      "name": "sample",
      "label": "Sample Label",
      "files": [
        {
          "name": "sample1",
          "label": "Sample 1 Doc"
        }
      ]
    },
    {
      "name": "howtostart",
      "label": "How to start",
      "files": [
        {
          "name": "starting",
          "label": "Starting with docbase"
        }
      ]
    }
  ],
  "v2": [
    {
      "name": "sample",
      "label": "Sample Label",
      "files": [
        {
          "name": "sample1",
          "label": "Sample 2 Doc"
        }
      ]
    }
  ]
},
  "publish": "github"
}
