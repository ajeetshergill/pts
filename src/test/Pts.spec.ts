import chai = require('chai');
import mocha = require('mocha');
import {Pt} from '../Pt';
import {Pts} from '../Pts';

var {assert} = chai;
var {describe, it} = mocha;


describe('Pts: ', function() {

  describe('Zipping: ', function() {
    it('can zip one slice', function() {
      let p = Pts.zipOne( [new Pt(1,3,5,7), new Pt(2,4,6,8), new Pt(5,10,15,20)], 2 );
      assert.isTrue( p.equals( new Pt(5,6,15) ) )
    });

    it('can zip one slice with default', function() {
      let p = Pts.zipOne( [new Pt(1), new Pt(2,4,6), new Pt(5,10)], 2, -1 );
      assert.isTrue( p.equals( new Pt(-1, 6, -1) ) )
    });

    it('can zip an array of Pt', function() {
      let ps = Pts.zip( [Pt.$(1,2), Pt.$(3,4), Pt.$(5,6)] );
      console.log( ps[1].toString() );
      assert.isTrue( ps[1].equals( new Pt(2,4,6) ) && ps.length == 2 );
    });

    it('can zip an array of Pt with defaults', function() {
      let ps = Pts.zip( [Pt.$(1,2), Pt.$(3), Pt.$(5,6,7,8)], 10 );
      assert.isTrue( ps[1].equals( new Pt(2, 10, 6) ) && ps.length == 2 );
    });

    it('can zip an array of Pt with longest value', function() {
      let ps = Pts.zip( [new Pt(1,2), new Pt(3), new Pt(5,6,7,8)], 10, true );
      assert.isTrue( ps[2].equals( new Pt(10, 10, 7) ) && ps.length == 4 );
    });

    it('can split an array into chunks', function() {
      let ps = Pts.split([1,2,3,4,5,6,7,8,9,10], 3);
      assert.isTrue( ps[2][2] === 9 && ps[2].length == 3 ) && ps.length == 4;
    });

  });

});