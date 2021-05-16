/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  MessageRequest: {
    fields: {
      Name: {
        type: "string",
        id: 1
      },
      Msg: {
        type: "string",
        id: 2
      },
      Code: {
        type: "int64",
        id: 3
      }
    }
  },
  MessageResponse: {
    fields: {
      Name: {
        type: "string",
        id: 1
      },
      Msg: {
        type: "string",
        id: 2
      },
      Code: {
        type: "int64",
        id: 3
      },
      Time: {
        type: "string",
        id: 4
      }
    }
  }
});

module.exports = $root;
