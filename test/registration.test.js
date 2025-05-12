const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // pastikan ekspor app di app.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Registration', () => {
  it('seharusnya sukses registrasi dengan input valid', done => {
    chai.request(app)
      .post('/register')
      .send({ username: 'alice', password: 'secret' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Registrasi sukses');
        done();
      });
  });

  it('seharusnya gagal jika data kosong', done => {
    chai.request(app)
      .post('/register')
      .send({ username: '', password: '' })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });

  it('seharusnya gagal duplikasi username', done => {
    // registrasi pertama
    chai.request(app)
      .post('/register')
      .send({ username: 'bob', password: 'pass' })
      .end(() => {
        // registrasi ulang
        chai.request(app)
          .post('/register')
          .send({ username: 'bob', password: 'pass' })
          .end((err, res) => {
            expect(res).to.have.status(409);
            expect(res.body).to.have.property('error');
            done();
          });
      });
  });
});

// Add commnent for testing
// Add comment fot testing webhook
