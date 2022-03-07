import { Application } from 'https://deno.land/x/oak@v10.4.0/mod.ts'

const port = parseInt(Deno.env.get('PORT') || '4008', 10)
const app = new Application()

app.use(async ctx => {
  await ctx.send({
    root: Deno.cwd(),
    index: 'readme.txt'
  })
})

console.debug(`Listening on 0.0.0.0:${port}`)
await app.listen({ port })
