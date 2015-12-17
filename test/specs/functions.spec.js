var expect = chai.expect;
chai.should();

describe('numberToString', function() {
  it('should exist', function() {
    expect(numberToString).to.exist;
    expect(numberToString).to.be.a('function');
  });

  it('should return a stringified number', function() {
    var result = numberToString(9);

    expect( result ).to.be.a('string');
    expect( result ).to.be.equal('9');
    expect( result.length ).to.be.equal(1);
  })

  it('should throw an error if argument is not a number', function () {
    var boundFn = numberToString.bind(null, '3');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number!' );

    boundFn = numberToString.bind(null, 'NaN');

    expect( boundFn ).to.throw( TypeError );
    expect( boundFn ).to.throw( TypeError, 'Please give me a number!' );
  })
});

//============= increase

describe('increase', function() {
  it('should exist', function() {
    expect(increase).to.exist;
    expect(increase).to.be.a('function');
  });

  it('should add one to given number', function() {
    var result = increase(3);

    expect( result ).to.be.a('number');
    expect( result ).to.be.equal(4);

    var result = increase(-5);

    expect( result ).to.be.a('number');
    expect( result ).to.be.equal(-4);
  });
})