import { useState, useEffect } from 'react'

// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
const getConnection = () => {
  return (
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection ||
    null
  )
}

const getConnectionInfo = () => {
  const connection = getConnection()

  if (!connection) return {}

  return {
    rtt: connection.rtt,
    type: connection.type,
    saveData: connection.saveData,
    downlink: connection.downlink,
    downlinkMax: connection.downlinkMax,
    effectiveType: connection.effectiveType
  }
}

/**
 * Detect connection online/offline
 * @returns {void}
 */
const useNetworkStatus = () => {
  const [state, setState] = useState(() => {
    return {
      updateDate: undefined,
      isOnline: navigator.onLine,
      ...getConnectionInfo()
    }
  })

  useEffect(() => {
    const handleOnline = () => {
      setState((prev) => ({
        ...prev,
        isOnline: true,
        updateDate: new Date().toString()
      }))
    }
    const handleOffline = () => {
      setState((prev) => ({
        ...prev,
        isOnline: false,
        updateDate: new Date().toString()
      }))
    }
    const handleConnectionChange = () => {
      setState((prev) => ({
        ...prev,
        ...getConnectionInfo()
      }))
    }
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    const connection = getConnection()
    // eslint-disable-next-line no-unused-expressions
    connection?.addEventListener('change', handleConnectionChange)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      // eslint-disable-next-line no-unused-expressions
      connection?.removeEventListener('change', handleConnectionChange)
    }
  }, [])

  return state
}

export default useNetworkStatus
