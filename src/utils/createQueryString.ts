export const createQueryString = <T extends Record<string, string | number>>(
  querys: T
) => {
  let queryString = ''
  for (const [param, value] of Object.entries(querys)) {
    queryString +=
      queryString === '' ? `?${param}=${value}` : `&${param}=${value}`
  }
  return encodeURI(queryString)
}
