export function Compose(behaviourClass: any, extendMethods?: string[]) {  
  return (target) => {
    if (!extendMethods) {
      target.prototype = Object.assign({}, behaviourClass.prototype, target.prototype);
    } else {
      const _temp = {};

      for (let index = 0; index < extendMethods.length; index++) {
        const method = extendMethods[index];
        if ( behaviourClass.prototype[method]) {
          _temp[method] = behaviourClass.prototype[method];
        }
      }

      target.prototype = Object.assign({}, target.prototype, _temp);
    }
  }
}
