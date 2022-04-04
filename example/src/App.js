import React from 'react'
import useNetworkStatus from 'react-detect-internet-connection'

const App = () => {
  const {
    isOnline,
    updateDate,
    rtt,
    type,
    saveData,
    downlink,
    downlinkMax,
    effectiveType,
  } = useNetworkStatus()

  console.log("useNetworkStatus props => ", useNetworkStatus())

  return (
    <>
      <h1 className="center">API</h1>
      <div className="wrapper">
        <table>
          <tbody>
            <tr>
              <th width={150}>isOnline</th>
              <td width={150} className="center">
                <span className={isOnline ? 'on' : 'off'}></span>
              </td>
              <td>Boolean that indicates if there is an internet connection or not.</td>
            </tr>
            <tr>
              <th>updateDate</th>
              <td>{updateDate || '-'}</td>
              <td>Date that is updated every time the connection status changes (online/offline).</td>
            </tr>
            <tr>
              <th>rtt</th>
              <td>{rtt}</td>
              <td>Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.</td>
            </tr>
            <tr>
              <th>type</th>
              <td>{type || '-'}</td>
              <td>Returns the type of connection a device is using to communicate with the network. It will be one of the following values: bluetooth, cellular, ethernet, none, wifi, wimax, other, unknown</td>
            </tr>
            <tr>
              <th>saveData</th>
              <td>{saveData ? 'true' : 'false'}</td>
              <td>Returns true if the user has set a reduced data usage option on the user agent.</td>
            </tr>
            <tr>
              <th>downlink</th>
              <td>{downlink}</td>
              <td>Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.</td>
            </tr>
            <tr>
              <th>downlinkMax</th>
              <td>{downlinkMax || '-'}</td>
              <td>Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.</td>
            </tr>
            <tr>
              <th>effectiveType</th>
              <td>{effectiveType}</td>
              <td>Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="center">
        <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation">For more information</a>
      </div>
    </>
  )
}

export default App
