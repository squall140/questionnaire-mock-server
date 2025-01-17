const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const Random = Mock.Random

module.exports = [
    {
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
    }
]