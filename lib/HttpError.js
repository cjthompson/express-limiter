var errorFactory = require('error-factory');

function getStatusCodeProperty(code) {
  return errorFactory.ErrorProperty({
    writable: false,
    configurable: false,
    enumerable: true,
    value: code
  }, false); // Not in the error constructor args list
}

function getLimitProperty(num) {
  return errorFactory.ErrorProperty({
    writable: false,
    configurable: false,
    enumerable: true,
    value: num
  }, true); // In the error constructor args list
}

module.exports = {
 /**
   * Create a TooManyRequestsError object with an HTTP status code of 429
   *
   * @param [message] {string}   Message to display, or undefined to use default "Too Many Requests"
   * @param [limit] {Number}     The maximum number of requests
   * @param [remaining] {Number} The number of remaining requests
   * @param [retry] {Number}     Number of seconds until limit is reset
   */
  TooManyRequestsError: errorFactory('TooManyRequestsError', {
    message: 'Too Many Requests',
    httpCode: getStatusCodeProperty(429),
    limit: getLimitProperty(),
    remaining: getLimitProperty(),
    retry: getLimitProperty()
  }),
}
