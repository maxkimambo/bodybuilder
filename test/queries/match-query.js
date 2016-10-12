import matchQuery from '../../src/queries/match-query'
import {expect} from 'chai'

describe('matchQuery', () => {

  it('should create a match query', () => {
    let result = matchQuery('message', 'this is a test')
    expect(result).to.eql({
      match: {
        message: 'this is a test'
      }
    })
  })

  it('should create a match phrase query', () => {
    let result = matchQuery('user', 'kimchy', { type: 'phrase' })
    expect(result).to.eql({
      match: {
        user: {
          query: 'kimchy',
          type: 'phrase'
        }
      }
    })
  });

  it('should create match_all query', ()=> {
    let result = matchQuery('user', '');
    expect(result).to.eql({
      match_all: {}
    })
  })

})
