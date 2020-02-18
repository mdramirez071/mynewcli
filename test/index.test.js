const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('mynewcli', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs Welcome', ctx => {
    expect(ctx.stdout).to.contain('Welcome to my first single-CLI')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
