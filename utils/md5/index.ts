import md5 from 'blueimp-md5'

// 加盐
const S_KEY = '@asd123SSDasd?.ItikE.Com.#'

const tomd5 = (head: string, ...content: Array<string>): string => {
  const contentMD5 = md5(
    S_KEY + content.reduce((pre, item) => (pre += item), '')
  )
  return head ? `${head}: ${contentMD5}` : contentMD5
}

export { tomd5 as default }
