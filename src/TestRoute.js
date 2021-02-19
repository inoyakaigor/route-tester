import React from 'react'
import { Route } from 'react-router-dom'

export default class TestRoute extends React.Component {
  state = {
    path: '',
    exact: false,
    strict: false,
    sensitive: false
  }

  handleInput(event) {
    const target = event.target
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    })
  }

  render() {
    const {
      path,
      exact,
      strict,
      sensitive
    } = this.state

    return (
      <Route
        path={path}
        strict={strict}
        exact={exact}
        sensitive={sensitive}
        children={({ match }) => (
          <div>
            <pre className='route flexbox'>
              <code className='stretch' >
                {'<Route'}
                <label>{'  path="'}
                  <input
                    type='text'
                    name='path'
                    value={path}
                    title='A path should begin with a forward slash (/)'
                    onChange={this.handleInput.bind(this)}
                    />{'"'}
                </label>
                <label>{'  exact={'}
                  <input
                    type='checkbox'
                    name='exact'
                    value={exact}
                    onChange={this.handleInput.bind(this)}
                  />
                  { exact.toString() }
                  {'}'}
                </label>
                <label>{'  strict={'}
                  <input
                    type='checkbox'
                    name='strict'
                    value={strict}
                    onChange={this.handleInput.bind(this)}
                  />
                  { strict.toString() }
                  {'}'}
                </label>
                <label>{'  sensitive={'}
                  <input
                    type='checkbox'
                    name='sensitive'
                    value={sensitive}
                    onChange={this.handleInput.bind(this)}
                  />
                  { sensitive.toString() }
                  {'}'}
                </label>
                {'  />'}
              </code>
            </pre>
            <pre style={{
              color: match ? 'green' : 'red',
            }}>
              <code>
                { JSON.stringify(match, null, 4) }
              </code>
            </pre>
          </div>
        )}
      />
    )
  }
}
