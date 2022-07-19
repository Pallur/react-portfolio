import "./works.scss"
import { Container, Row, Col } from 'react-grid-system'

export default function Works() {
  return (
    <div className="works" id="works">
      <h1>More from me</h1>
      <div className="grid" id="grid">
        <Container fluid>
        <Row align="center" style={{ height: 'auto' }}>

          <Col sm={4} md="content">
          <div className="content-text">
            <h3>Discord bot</h3>
              Discord bot made in Python. It takes everyone in a voice call and randomizers 
              them for 5v5 teams for custom games in Valorant. Can be used for any other game though.
            <div className="content-img">
              <img 
                src="assets/discordbot.png" 
                alt="" 
              />
            </div>
          </div>
          </Col>

          <Col sm={4} md="content">
            <div className="content-text">
              <h3>Game Jam 2022</h3>
              I took place in GMTK Game Jam 2022. The competition lasted for 50 hours. The theme was 'Roll of the Dice'.
              I made a platformer where the player rolls two dice, one that determines how often the player can jump
              and one that determines how many level the player has to jump back up to get the crown.
            </div>
            <div className="content-img">
              <img 
                src="assets/Starting.png" 
                alt="" 
              />
              <img 
                src="assets/Crown.png" 
                alt="" 
              />
              <img 
                src="assets/Death.png" 
                alt="" 
              />
              <h2>
                <a href="https://p0llur.itch.io/drop-bet" target="_blank" rel="noopener noreferrer"> Download now! </a>
              </h2>
            </div>
          </Col>

          <Col sm={4} md="content">
          <div className="content-text"> 
            <h3>Houdini</h3>
            I have used Houdini to create a <a href="https://www.artstation.com/artwork/G8WZY3" target="_blank" rel="noopener noreferrer"> Procedural cable generator </a> and  
            <a href="https://www.artstation.com/artwork/4X21vk" target="_blank" rel="noopener noreferrer"> Procedural house layout </a>. 
            I have also created a pre-baked destructable pillars for Unreal Engine.
            
          </div>
          <div className="content-img">
            <img 
                  src="assets/cables.jpg" 
                  alt="" 
              />
              <img 
                  src="assets/layout.jpg" 
                  alt="" 
              />

          </div>
          </Col>

        </Row>
        </Container>
      </div>
        
    </div>
  )
}
