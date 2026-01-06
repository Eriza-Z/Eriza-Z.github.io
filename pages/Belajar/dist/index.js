"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Footer_belajar_1 = require("../../Components/Other/Footer-belajar");
var Belajar_1 = require("../../Components/Page/Belajar");
function link() {
    return (React.createElement("div", null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Belajar")),
        React.createElement(Belajar_1["default"], null),
        React.createElement(Footer_belajar_1["default"], null)));
}
exports["default"] = link;
