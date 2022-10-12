import { ApplicationState } from './ApplicationState'
import { createBlockState } from './Block'
import './style.css'

function setup() {
    const block = createBlockState({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        label: 'hello()'
    })

    ApplicationState.blocks.push(block)
}

function loop() {
    requestAnimationFrame(loop)
}


setup()
loop()



