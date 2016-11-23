import React from 'react'
import './CurrentUser.css'
import Gravatar from 'react-gravatar'

const createLinkFromUrlText = (string) => {
  const urls = string.split(', ')
  return urls.map((url, key) =>
    <span key={key}>
      <a href={'http://' + url} target="_blank">{url}</a>
      {urls.length - 1 === key ? '' : ', '}
    </span>
  )
}

const CurrentUser = (props) => (
  <div className="CurrentUser">
    <h1>{props.user.name}</h1>
    <div className="CurrentUser-meta">
      <Gravatar email={props.user.email} size={150} className="CurrentUser-avatar" />
        <div>
        {props.user.email &&
          <p><i className="fa fa-envelope-o"></i> {props.user.email}</p>
        }
        {props.user.web &&
          <p><i className="fa fa-rss"></i> {createLinkFromUrlText(props.user.web)}</p>
        }
        {props.user.residencia &&
          <p><i className="fa fa-globe"></i> {props.user.residencia}</p>
        }
      </div>
    </div>
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
    {props.user.hablar &&
      <div className="CurrentUser-answer">
        <h3>¿Sobre qué te gustaría hablar con ellas?</h3>
        <p>{props.user.hablar}</p>
      </div>
    }
  </div>
)

export default CurrentUser