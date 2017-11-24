const express = require('express')

module.exports = function(server){
    //api de Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da api
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}