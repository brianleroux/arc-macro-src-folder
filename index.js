let path = require('path')
let fs = require('fs')

/**
 * change the function source folder for deployment!
 */
module.exports = function macro(arc, cfn, stage) {
  if (arc.src) {

    let src = arc.src[0]
    let fullPath = path.join(process.cwd(), src)
    if (!fs.existsSync(fullPath) && process.env.NODE_ENV != 'testing')
      throw ReferenceError('Path not found: ' + fullPath)

    let funs = Object.keys(cfn.Resources).filter(name=> {
      let type = cfn.Resources[name].Type
      return type === 'AWS::Serverless::Function' || type === 'AWS::Lambda::Function'
    })

    funs.forEach(fun=> {
      let code = cfn.Resources[fun].Properties.CodeUri.replace('src', src)
      cfn.Resources[fun].Properties.CodeUri = code
    })
  }
  return cfn
}
