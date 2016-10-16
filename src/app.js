import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
import * as d3 from "d3";

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
}

var dateFormat = d3.timeFormat("%A");
var someDate = new Date(2014, 4, 1);
console.log(dateFormat(someDate));