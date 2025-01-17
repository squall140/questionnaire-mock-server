/**
 * @description 获取题目列表
 */

const Mock = require('mockjs');
const Random = Mock.Random;

function getQuestionList(opt ={}){
    const { len = 10, isDeleted = false, isStar = false } = opt
    const list = []
    for(let i = 0; i < len; i++){
        list.push({
            _id: Random.id(),
            title: Random.ctitle(10, 20),
            isPublished: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),
            createdAt: Random.datetime(),
            isDeleted
        })
    }

    return list

}


module.exports = getQuestionList