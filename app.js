var express = require("express")
var app = express.createServer()
var thumbsExtra = {
  require: require,
  oneword: function (name) {
    return name.replace(/[^\w]/g, "") 
  },
  lower: function (word) {
    return word.toLowerCase()        
  } 

}
Thumbs = require("./thumbs.js")
Thumbs.addScope(thumbsExtra)
Thumbs.runFile("./deadsimplesite.thumbs")
