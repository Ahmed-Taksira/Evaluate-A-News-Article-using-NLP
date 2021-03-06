import "babel-polyfill"

describe("POST /getData", ()=>{
    it('responds with json', function(done) {
        request(app)
          .post('/getData')
          .send({
            text: "Text",
            POLARITY : 'P',
            agreement : "DISAGREEMENT",
            subjectivity : "SUBJECTIVE",
            confidence : "86",
            irony : "NONIRONIC"
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
})