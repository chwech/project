
import printMe from './print.js'
import { cube } from './math.js'
import './style.css'

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}