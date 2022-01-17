const { toSSRComment } = require('./consts')

describe('toSSRComment', () => {
  it('should throw an error if missing an ID', () => {
    const message = 'must pass non-empty string to toSSRComment'
    expect(() => toSSRComment()).toThrowError(new TypeError(message))
  })

  it('should return an SSR comment with build hash and ID', () => {
    const id = 'some-id'
    const expected = expect.stringMatching(
      /<!--slinkity-ssr [a-z0-9]{8}(-[a-z0-9]{4}){3}-[a-z0-9]{12} some-id-->/,
    )

    expect(toSSRComment(id)).toEqual(expected)
  })
})
