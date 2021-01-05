const expect = require('expect');
const request = require('supertest');
const { app } = require('../server');
const { Portfolio } = require('../models');
const portfolioExample = require('../examples/portfolioExample');

// Run before every single test case
beforeEach((done) => {
  // clear db before test
  Portfolio.remove({}).then(() => done());
})

describe('POST /api/v1/portfolio', () => {
  it('should create new portfolio', (done) => {
    request(app)
      .post('/api/v1/portfolio')
      .send(portfolioExample)
      .expect(200)
      .expect((res) => {
        expect(res.text).toBe('Saved new portfolio.');
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        // Portfolio.find().then((portfolios) => {
        //   expect(portfolios.name).toBe(portfolioExample.name);
        //   done();
        // }).catch(e => done(e));
        done();
      })
  })
})
