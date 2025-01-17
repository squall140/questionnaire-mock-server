const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')


const app = new Koa()
const router = new Router()

async function delayGetResponse(fn, ctx) {
    return new Promise(resolve => {
        setTimeout(() => {
            const res = fn(ctx)
            resolve(res)
        }, 1000)
    })
}



mockList.forEach(item => {
    const { url, method, response } = item
    router[method](url, async ctx => {
        // mock network delay, 1s
        const res = await delayGetResponse(response, ctx)
        ctx.body = res
    })
})


app.use(router.routes())
app.listen(3001)