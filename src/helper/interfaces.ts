export interface Countries {
  currencies: {
    [key: string] : {
      name: string,
      symbol: string
    }
  },
  name: {
    common: string
  },
  flags: {
    svg: string
  }
}