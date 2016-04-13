'use strict';

import { Model } from 'components/mvc';

// Prefix all entries to avoid collisions.
const PREFIX = 'foxbox-';

const DEFAULT_POLLING_ENABLED = true;
const POLLING_INTERVAL = 2000;
const ONLINE_CHECKING_INTERVAL = 5000;
const ONLINE_CHECKING_LONG_INTERVAL = 1000 * 60 * 5;
const API_VERSION = 1;

/**
 * Name of the query string parameter that should be presented in URLs pointing
 * to box endpoints (eg. streams, event sources etc.) if authorisation HTTP
 * header can't be attached.
 * @type {string}
 * @const
 */
const QUERY_STRING_AUTH_TOKEN_NAME = 'auth';

// Not all browsers have localStorage supported or activated.
const storage = localStorage ? localStorage : {
  getItem: () => undefined,
  setItem: () => {},
  removeItem: () => {}
};

export default class Settings extends Model {
  constructor() {
    const pollingEnabled = storage.getItem(`${PREFIX}pollingEnabled`) !== null ?
      storage.getItem(`${PREFIX}pollingEnabled`) === 'true' :
      DEFAULT_POLLING_ENABLED;

    super({
      _configured: storage.getItem(`${PREFIX}configured`) !== null ?
      storage.getItem(`${PREFIX}configured`) === 'true' : false,

      _url: storage.getItem(`${ PREFIX }url`),
      _ipaddrs: storage.getItem(`${ PREFIX }ipaddrs`) || [],

      _session: storage.getItem(`${PREFIX}session`),
      _skipDiscovery: storage.getItem(`${PREFIX}skipDiscovery`) === 'true',
      _pollingEnabled: pollingEnabled
    });
  }

  clear() {
    return new Promise(resolve => {
      // @todo Remove only the items set here.
      storage.clear();
      resolve();
    });
  }

  on(property, handler) {
    const prototype = Object.getPrototypeOf(this);
    const parent = Object.getPrototypeOf(prototype);

    parent.on.call(this, `_${property}`, handler);
  }

  get configured() {
    return this._configured;
  }

  set configured(value) {
    value = !!value;
    this._configured = value;
    storage.setItem(`${PREFIX}configured`, value);
  }

  get url() {
    return this._url;
  }

  set url(url) {
    this._url = String(url);
    storage.setItem(`${PREFIX}url`, this._url);
  }

  get ipaddrs() {
    return this._ipaddrs;
  }

  set ipaddrs(ipaddrs) {
    this._ipaddrs = ipaddrs || [];
    storage.setItem(`${PREFIX}ipaddrs`, this._ipaddrs);
  }

  get session() {
    return this._session;
  }

  set session(session) {
    if (session === undefined) {
      this._session = undefined;
      storage.removeItem(`${PREFIX}session`);
    } else {
      this._session = session;
      storage.setItem(`${PREFIX}session`, this._session);
    }
  }

  get skipDiscovery() {
    return this._skipDiscovery;
  }

  set skipDiscovery(value) {
    value = !!value;
    this._skipDiscovery = value;
    storage.setItem(`${PREFIX}skipDiscovery`, value);
  }

  get pollingEnabled() {
    return this._pollingEnabled;
  }

  set pollingEnabled(value) {
    value = !!value;
    this._pollingEnabled = value;
    storage.setItem(`${PREFIX}pollingEnabled`, value);
  }

  // Getters only.
  get pollingInterval() {
    return POLLING_INTERVAL;
  }

  get onlineCheckingInterval() {
    return ONLINE_CHECKING_INTERVAL;
  }

  get onlineCheckingLongInterval() {
    return ONLINE_CHECKING_LONG_INTERVAL;
  }

  get queryStringAuthTokenName() {
    return QUERY_STRING_AUTH_TOKEN_NAME;
  }

  get apiVersion() {
    return API_VERSION;
  }
}
