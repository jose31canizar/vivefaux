export const compose = (...fns) => res =>
  fns.reduce((accum, next) => next(accum), res);

export const findTag = (props, tags, defaultTag) => {
    let result = Object.keys(props).find(prop => tags.includes(prop))
    return !result ? defaultTag : result
  }