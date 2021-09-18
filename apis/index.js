const mergeAll = requireContext => {
  return requireContext.keys().reduce((total, item) => {
    const name = item.slice(2, -3)
    if (name === 'index') return total
    total[name] = { ...requireContext(item).default }
    return total
  }, {})
}

const requireContext = require.context('.', false, /\.js$/)

export default mergeAll(requireContext)