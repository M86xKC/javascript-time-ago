import grade from '../grade'
import gradation from './approximate'

// Perhaps this should be part of `grade.test.js` instead.

describe('"approximate" gradation', () =>
{
	it('should grade correctly', () =>
	{
		const test = (elapsed) => grade(elapsed, null, [
			'second',
			'minute',
			'hour',
			'day',
			'month',
			'year'
		], gradation)

		expect(test(0)).to.be.undefined

		expect(test(1).unit).to.equal('second')
		expect(test(1).factor).to.equal(1)

		expect(test(45).unit).to.equal('second')
		expect(test(45).factor).to.equal(1)

		expect(test(46).unit).to.equal('minute')
		expect(test(46).factor).to.equal(60)
		expect(test(46).granularity).to.be.undefined

		expect(test(2.5 * 60 - 1).unit).to.equal('minute')
		expect(test(2.5 * 60 - 1).factor).to.equal(60)
		expect(test(2.5 * 60 - 1).granularity).to.be.undefined

		expect(test(2.5 * 60).unit).to.equal('minute')
		expect(test(2.5 * 60).factor).to.equal(60)
		expect(test(2.5 * 60).granularity).to.equal(5)

		expect(test(52.5 * 60 - 1).unit).to.equal('minute')
		expect(test(52.5 * 60 - 1).factor).to.equal(60)
		expect(test(52.5 * 60 - 1).granularity).to.equal(5)

		expect(test(52.5 * 60).unit).to.equal('hour')
		expect(test(52.5 * 60).factor).to.equal(60 * 60)
	})
})