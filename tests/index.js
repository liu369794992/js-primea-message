const tape = require('tape')
const Message = require('../')

tape('message API tests', async t => {
  const capA = {}
  const json = '{"ticks":77,"data":{"type":"Buffer","data":[116,101,115,116]},"caps":[{}]}'

  const params = {
    data: Buffer.from('test'),
    caps: [capA],
    ticks: 77
  }

  let message = new Message(params)

  t.equals(message.caps[0], capA, 'to getter should work')
  t.equals(message.data.toString(), 'test', 'to getter should work')
  t.equals(message.ticks, 77, 'resources getter should work')
  t.equals(JSON.stringify(message), json)

  message = new Message()
  t.equals(message.ticks, 0, 'resources getter should work')
  message.ticks = 99
  t.equals(message.ticks, 99, 'setter should work')
  t.end()
})
