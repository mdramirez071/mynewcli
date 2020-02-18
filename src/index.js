const {Command, flags} = require('@oclif/command')

class MynewcliCommand extends Command {
  async run() {
    const {flags} = this.parse(MynewcliCommand)
    const name = flags.name || 'world'
    const intro = flags.intro || 'Welcome to my first single-CLI'
    this.log(`hello ${name} from ./src/index.js`)
    this.log(`${intro} from ./src/index.js`)
  }
}

MynewcliCommand.description = `Describe the command here
...
Extra documentation goes here
`

MynewcliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = MynewcliCommand
