import { getLoginProcess } from '../../../../src/redux-process/processes/LoginProcess'
import { EasyJWTNetworker } from '../../../../src/EasyJWTNetworker'
import { EasyJWTRequest } from '../../../../src/EasyJWTRequest'

describe('src/redux-process/processes/LoginProcess::performAction', function () {
  let networker: EasyJWTNetworker,
    refreshRequest: EasyJWTRequest,
    request: EasyJWTRequest,
    instance: any,
    networkerStub: any

  before(function () {
    refreshRequest = new EasyJWTRequest({
      url: '/refresh',
      method: 'POST'
    })
    networker = new EasyJWTNetworker({
      refreshRequest
    })
    request = new EasyJWTRequest({
      url: '/other',
      method: 'GET'
    })

    networkerStub = this.sinon.stub().returns({
      status: 200,
      data: {
        user: {
          id: 1
        }
      }
    })
    request['_getNetworker'] = () => networkerStub

    const LoginProcess = getLoginProcess(networker, request)
    instance = new LoginProcess({})
  })

  it('should resolve with payload', async function () {
    const result = await instance.performAction({}, {})
    this.assert.deepEqual(result, {
      user: {
        id: 1
      }
    })
  })
})
