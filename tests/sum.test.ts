import defaultExport from '../sum'

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
//   })

//   test('adds 1  to equal 3', () => {
//     const res = sum(1, 6)
//     expect(res).toBe(7)
//   })
// })

jest.mock('../sum', () => {
  const originalModule = jest.requireActual('../sum')

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockReturnValue(5),
  }
})

describe('Test mock modules sum', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('call sum', () => {
    const res = defaultExport(2, 3)
    expect(res).toBe(5)
    expect(defaultExport).toHaveBeenCalled()
    expect(defaultExport).toHaveBeenCalledWith(2, 3)
  })

  test('call sum function without secound param', () => {
    const res = defaultExport(2)
    expect(res).toBe(5)
    expect(defaultExport).toHaveBeenCalled()
    expect(defaultExport).toHaveBeenCalledWith(2)
  })
})
