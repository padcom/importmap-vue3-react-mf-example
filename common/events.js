import uuid from 'uuid'

/**
 * Message event describing a request to start a microfrontend
 */
 export class StartMicrofrontendEvent extends MessageEvent {
  /**
   * @param {HTMLElement} root root for the microfrontend
   * @param {String} url url to load the microfrontend module from
   * @param {String|String[]) url or list of urls to load stylesheets from
   */
  constructor(root, url, stylesheets = []) {
    if (typeof root !== 'string') throw new Error('root needs to be a string')
    if (typeof url !== 'string') throw new Error('url needs to be a string')
    if (!Array.isArray(stylesheets)) stylesheets = [ stylesheets ]

    super('message', { data: { id: uuid(), root, url, stylesheets } })
  }
}

/**
 * Message event describing a request to start a Vue.js application
 */
export class StartVueAppEvent extends MessageEvent {
  /**
   * @param {HTMLElement} root root for the microfrontend
   * @param {String} url url to load the microfrontend module from
   * @param {String|String[]) url or list of urls to load stylesheets from
   */
  constructor(root, url, stylesheets = []) {
    if (typeof root !== 'string') throw new Error('root needs to be a string')
    if (typeof url !== 'string') throw new Error('url needs to be a string')
    if (!Array.isArray(stylesheets)) stylesheets = [ stylesheets ]

    super('message', { data: { id: uuid(), root, url, stylesheets } })
  }
}
