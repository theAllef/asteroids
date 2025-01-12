const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

c.fillStyle = '#030028'
c.fillRect(0, 0, canvas.width, canvas.height)

class Player {
  constructor({position, velocity }) {
     this.position = position
     this.velocity = velocity
  }
  draw() {
    //  c.fillStyle = 'red'
    // c.fillRect(this.position.x, this.position.y, 100, 100)
    c.moveTo(this.position.x + 30, this.position.y)
    c.lineTo(this.position.x - 10, this.position.y - 10)
    c.lineTo(this.position.x - 10, this.position.y + 10)
    c.closePath()

    c,strokeStyle = 'white'
    c.stroke()
  }
}

const player = new Player({
  position : { x: 0, y: 0},
  velocity : { x: 0, y: 0}
  })

player.draw()
