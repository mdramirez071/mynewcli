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
  .do(() => cmd.run([]))
  .it('runs Description', ctx => {
    expect(ctx.stdout).to.contain('CLIs are great for automating things!')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'Michael']))
  .it('runs hello --name Michael', ctx => {
    expect(ctx.stdout).to.contain('hello Michael')
  })
})
