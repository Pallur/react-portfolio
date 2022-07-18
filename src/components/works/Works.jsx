import "./works.scss"
import { Container, Row, Col } from 'react-grid-system'

export default function Works() {
  return (
    <div className="works" id="works">
      <h1>Meira frá mér</h1>
      <div className="grid" id="grid">
        <Container fluid>
        <Row align="center" style={{ height: 'auto' }}>

          <Col sm={4} md="content">
          <div className="content-text">
            <h3>Discord bot</h3>
            Discord botti gerður í Python sem raðar saman úr voice calli í Discord niður í 10 manna lið fyrir custom leiki.
            Það má vera fleiri en 10 í voice callinu og þá er hægt að nota -nafn eftir commandi til að eyða þeim úr lista af þeim sem verða valin.
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
              Ég tók þátt í GMTK Game Jam 2022, sem stóð yfir í 50 klukkustundir. Þema-ið var 'Roll of the Dice'.
              Ég gerði platformer þar sem spilari rúllar tveimur teningum, einum sem segir til um hversu mörg hopp spilar fær
              og einum sem segir til um hversu margar hæðir spilari þarf að fara upp aftur til að ná í kórónuna.
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
            Ég hef notað Houdini til að búa til <a href="https://www.artstation.com/artwork/G8WZY3" target="_blank" rel="noopener noreferrer"> Procedural cable generator </a> og  
            <a href="https://www.artstation.com/artwork/4X21vk" target="_blank" rel="noopener noreferrer"> Procedural house layout </a>. 
            Hef einnig búið til pre-baked destructable veggi fyrir Unreal Engine.
            
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
