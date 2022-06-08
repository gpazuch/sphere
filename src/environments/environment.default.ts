const ORB = {
  orbApi: {
    version: '1',
    apiUrl: 'api/v',
  },
  servicesUrls: {
    // register user
    users: '/users',
    // retrieve auth token
    login: '/tokens',
    // request passwd reset
    requestPasswd: '/password/reset-request',
    // reset passwd
    resetPasswd: '/password/reset',
  }
}

export const environment = {
  orbApi: {urlKeys: Object.keys(ORB.servicesUrls), ...ORB.orbApi, servicesUrls: ORB.servicesUrls},
  ...ORB.servicesUrls,
}
