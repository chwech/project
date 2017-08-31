import _ from 'lodash'
import './style.css'
import Test from './test.jpg'

function component() {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // 添加图像
  var image = new Image()
  image.src = Test
  element.appendChild(image)
  return element
}

document.body.appendChild(component())