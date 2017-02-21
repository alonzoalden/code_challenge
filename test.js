const assert = require('assert');
const chai = require('chai');
const Challenge = require('./challenge.js');

describe('Encode', function() {

  it('Should encode: 1a <> 1A', function() {
    chai.expect(Challenge.encode('1a')).to.equal('1A');
  });

  it('Should encode: He1lo <> HM1QA', function() {
    chai.expect(Challenge.encode('He1lo')).to.equal('HM1QA');
  });

  it('Should encode: This sentence should be encoded properly. <> TBQB LXSHYSQH XAWJGP FG JSQRSII THGEUWDK.', function() {
    chai.expect(Challenge.encode('This sentence should be encoded properly.')).to.equal('TBQB LXSHYSQH XAWJGP FG JSQRSII THGEUWDK.');
  });

  it('Should encode: -7-7-340d3%%@4po <> -7-7-340D3%%@4TE', function() {
    chai.expect(Challenge.encode('-7-7-340d3%%@4po')).to.equal('-7-7-340D3%%@4TE');
  });

  it('Should encode: e 340d3493 jdjd <> E 3403493 ONNN', function() {
    chai.expect(Challenge.encode('e 3403493 jdjd')).to.equal('E 3403493 ONNN');
  });

  it('Should encode: 993939 MMMmm 883 B kkd <> 993939 MZZZZ 883 O MVO', function() {
    chai.expect(Challenge.encode('993939 MMMmm 883 B kkd')).to.equal('993939 MZZZZ 883 O MVO');
  });

  it('Should encode: " " <> " "', function() {
    chai.expect(Challenge.encode(' ')).to.equal(' ');
  });

});

describe ('Decode', function() {

  it('Should decode: BG XNMW YI SVAWY JNJM GKWMFCWS. <> BE SURE TO DRINK YOUR OVALTINE.', function() {
    chai.expect(Challenge.decode('BG XNMW YI SVAWY JNJM GKWMFCWS.')).to.equal('BE SURE TO DRINK YOUR OVALTINE.');
  });

  it('Should decode: 1a <> 1A', function() {
    chai.expect(Challenge.decode('1a')).to.equal('1A');
  });

  it('Should decode: HM1QA <> HE1LO', function() {
    chai.expect(Challenge.decode('HM1QA')).to.equal('HE1LO');
  });

  it('Should decode: TBQB LXSHYSQH XAWJGP FG IIHRSII THGEUWDK. <> THIS SENTENCE SHOULD BE DECODED PROPERLY.', function() {
    chai.expect(Challenge.decode('TBQB LXSHYSQH XAWJGP FG IIHRSII THGEUWDK.')).to.equal('THIS SENTENCE SHOULD BE DECODED PROPERLY.')
  });

  it('Should decode: 23423423 ASDFAVPO @#$@#$ KzzpL <> 23423423 ARLTGOAN @#$@#$ WCWSS', function() {
    chai.expect(Challenge.decode('23423423 ASDFAVPO @#$@#$ KzzpL')).to.equal('23423423 ARLTGOAN @#$@#$ WCWSS');
  });

})
