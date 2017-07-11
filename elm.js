const spawn = require('child_process').spawnSync
const executablePaths = require('elm/platform').executablePaths

const arguments = process.argv.slice(2)

// allow additional command 'dev'
if (arguments[0] === 'dev') arguments[0] = 'start'

const elmAppCommands = ['build', 'start', 'test', 'eject', 'package', 'repl', 'make', 'reactor']
if (!elmAppCommands.includes(arguments[0])) {
    console.log('\nUsage: node elm <command>\n')
    console.log('where <command> is one of:')
    console.log('    build, dev, start, package, reactor, make, repl\n')

    process.exit(1)
} else {
    const child = spawn('node', ['node_modules/create-elm-app/bin/elm-app-cli.js'].concat(arguments), { stdio: 'inherit' })

    process.exit(child.status)
}
