import { itsWorking } from './testing.js'

const outerBox = document.querySelector('#holder')
const midBox = document.querySelector('#square')
const innerBox = document.querySelector('#inner-square')

const buttonOne = document.getElementsByTagName('button')[0]
const buttonTwo = document.getElementsByTagName('button')[1]
const buttonThree = document.getElementsByTagName('button')[2]


buttonOne.addEventListener('click', itsWorking)
buttonTwo.addEventListener('click', itsWorking)
buttonThree.addEventListener('click', itsWorking)