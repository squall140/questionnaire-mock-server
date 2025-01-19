const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const Random = Mock.Random

module.exports = [
    {
        // Retrieve a question details by id
        url: '/api/question/:id',
        method: 'get',
        response(){
            return {
                errno: 0,
                data: {
                        id: Random.id(),
                        title: Random.ctitle(5, 10),
                        desc: '问卷描述',
                        js: '',
                        css: '',
                        isPublished: true,
                        isDeleted: false,
                        // componentList: getComponentList()
                }

                // errno: 1002,
                // msg: 'error 测试'
            }
        }
    },
    {
        // publish a question
        url: '/api/question',
        method: 'post',
        response(){
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // get question list
        url: '/api/question',
        method: 'get',
        response(ctx){
            const { url ='' } = ctx
            // if url includes isStar, return isStar = true
            const isStar = url.includes('isStar') ? true : false
            console.log(isStar)
            return {
                errno: 0,
                data: {
                    list: getQuestionList({isStar}),
                    total: 100
                }
            }
        }
    },
]