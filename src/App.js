import $ from 'jquery'
import React, { Component } from 'react'
import './App.css'

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
      i: user['gsx$sobrequétegustaríahablarconellassitienesalgúnobjetivoconcretocomoencontraraunsocioparaunproyectoindícaloaquí.'].$t,
      j: user['gsx$cuáleslamejorformadeponerseencontactocontigoe-mailfacebooktwitterlinkedinpáginapersonal...'].$t,
      k: user['gsx$sieresdemadridpodríasalojarentucasaaalguienquevengaalafiestadesdefuera'].$t,
      l: user['gsx$eresvegetarianoveganootienesalgunaalergiaalimentariaquedebamosconocer'].$t
    })
  })

  return users
}

const CurrentUser = (props) => (
  <div className="CurrentUser">
    <h1>{props.user.name}</h1>
    {props.user.email &&
      <p>Email: {props.user.email}</p>
    }
    {props.user.web &&
      <p>Web: <a href={'http://' + props.user.web} target="_blank">{props.user.web}</a></p>
    }
    {props.user.residencia &&
      <p>Lugar de residencia: {props.user.residencia}</p>
    }
    {props.user.descripcion &&
      <div className="CurrentUser-answer">
        <h3>Cuéntanos sobre ti</h3>
        <p>{props.user.descripcion}</p>
      </div>
    }
    {props.user.conocer &&
      <div className="CurrentUser-answer">
        <h3>¿Qué tipo de personas te gustaría conocer?</h3>
        <p>{props.user.conocer}</p>
      </div>
    }
  </div>
)

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

  render() {
    return (
      <div className="App">
        <div className="UsersList">
          <h2 className="UsersList-header">
            Asistentes
            <small>({this.state.users.length})</small>
          </h2>
          <ul>
            {this.state.users.map( (user, key) =>
              <li key={key} onClick={this.selectUser.bind(this, user.name)}>{user.name}</li>
            )}
          </ul>
        </div>
        <CurrentUser user={this.state.currentUser} />
      </div>
    );
  }
}

export default App
