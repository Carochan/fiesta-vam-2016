import React from 'react'
import './Home.css'

const Home = () => (
  <div>
    <div className="Home CurrentUser">
      <h1>Asistentes a la fiesta VAM 2016</h1>
      <p>¡Hey, hola!</p>
      <p>Ya ha pasado otra <a href="https://viviralmaximo.net/fiesta-vam-2016/">fiesta VAM</a> y hemos sobrevivido. En esta ocasión Ángel y Adri prepararon un formulario con información de los asistentes que se guardaba en una hoja de Google Drive. Su lectura era un poco <i>mierder</i> así que me he tomado la libertad de usar mis conocimientos y un par de mis horas para mostrar esa información de una manera más agradable a la vista.</p>
      <p>Los datos se sacan directamente de Google Drive haciendo uso de su API. Están en formato JSON y se muestran en pantalla ordenaditos con React. Esta página está alojada en Github Pages y puedes <a href="https://github.com/gorkapit/fiesta-vam-2016">mirar su código e incluso contribuir a mejorarla</a>.</p>
      <p>Si quieres modificar tus datos puedes hacerlo <a href="mailto:gorkapit@gmail.com">enviándome un correo</a>.</p>
    </div>

    <div className="CurrentUser">
      <p>Antes de que te pongas a inspeccionar te dejo una canción que resume un poco el ambiente que hubo en la fiesta. ¡Sube el volumen!</p>
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/18395882&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
    </div>
  </div>
)

export default Home