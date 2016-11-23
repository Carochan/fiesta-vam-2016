import $ from 'jquery'
import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import CurrentUser from './components/CurrentUser'
import Footer from './components/Footer'

const dataUrl = 'https://spreadsheets.google.com/feeds/list/1XgtlE6jAFpKI5WJQRcWwMhOCZFmQG7WWgtYy_8Gekq0/od6/public/values?alt=json'

const setUsersInfo = (data) => {
  let users = []

  data.feed.entry.forEach( user => {
    users.push({
      date: user['gsx$marcatemporal'].$t,
      name: user['gsx$nombreyapellidos'].$t,
      email: user['gsx$e-mail'].$t,
      residencia: user['gsx$lugarderesidencia'].$t,
      web: user['gsx$páginaweb'].$t,
      f: user['gsx$desdecuándovasaestarenmadrid'].$t,
      descripcion: user['gsx$quédeberíansaberelrestodeasistentessobreticuéntalesquiéneresaquétededicasquéesloquetegustaenquéproyectosestástrabajandoactualmentecuálessontussúper-poderesytodoloqueseteocurra'].$t,
      conocer: user['gsx$aquétipodepersonastegustaríaconocer'].$t,
      hablar: user['gsx$sobrequétegustaríahablarconellassitienesalgúnobjetivoconcretocomoencontraraunsocioparaunproyectoindícaloaquí.'].$t,
      j: user['gsx$cuáleslamejorformadeponerseencontactocontigoe-mailfacebooktwitterlinkedinpáginapersonal...'].$t,
      k: user['gsx$sieresdemadridpodríasalojarentucasaaalguienquevengaalafiestadesdefuera'].$t,
      l: user['gsx$eresvegetarianoveganootienesalgunaalergiaalimentariaquedebamosconocer'].$t
    })
  })

  users.sort((a, b) => a.name.localeCompare(b.name))

  return users
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      currentUser: {}
    }
  }

  componentDidMount() {
    $.getJSON(dataUrl, (data) => {
      const getUsers = setUsersInfo(data)
      this.setState({
        users: getUsers
      })
    })
  }

  selectUser(username) {
    this.setState({
      currentUser: this.setCurrentUser(username)
    })
  }

  setCurrentUser(username) {
    return this.state.users.find( user => user.name === username )
  }

  goHome() {
    this.setState({
      currentUser: {}
    })
  }

  render() {
    const currentUserOrIndex = Object.keys(this.state.currentUser).length === 0 ? <Home /> : <CurrentUser user={this.state.currentUser} />

    return (
      <div className="App">
        <div className="UsersList">
          <ul>
            <li onClick={this.goHome.bind(this)}>Inicio</li>
          </ul>
          <h2 className="UsersList-header">
            Asistentes
            <small>({this.state.users.length})</small>
          </h2>
          <ul>
            {this.state.users.map( (user, key) =>
              <li key={key} onClick={this.selectUser.bind(this, user.name)} className={this.state.currentUser.name === user.name ? 'UsersList-selected' : ''}>{user.name}</li>
            )}
          </ul>
        </div>
        <div className="Content">
          {currentUserOrIndex}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App
