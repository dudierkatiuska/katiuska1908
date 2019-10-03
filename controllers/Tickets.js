'use strict'
var ticket_model = require('../models/ticket.js')
var liveevents_model = require('../models/liveevents.js')
var codepromotion_model = require('../models/codepromotion.js')
const { checkToken } = require('../config/tokens')


async function createTicket(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    const data = {
        "tick_description" : req.body.description,
        "tick_dtcreation" : req.body.dtcreation,
        "tick_liveevents" : req.body.liveevents,
        "tick_valor" : req.body.valor,
        "tick_cupon" : req.body.cupon,
    }
    try{
        var result = await(ticket_model.create(data))
        return 'Se creo el ticket correctamente'
    } catch (e) {
        return e.parent.detail
    }
}


async function updateTicket(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var tick_ide = req.params.tick_ide;
    const { tick_description, tick_dtcreation,tick_liveevents,tick_valor,tick_cupon} = req.body;
    const updateticket = await ticket_model.findAll({
        attributes: ['tick_ide','tick_description', 'tick_dtcreation','tick_liveevents','tick_valor','tick_cupon'],
        where:{
           tick_ide 
        }
    });
    if(updateticket.length > 0){
        return new Promise((resolve) => {
            updateticket.forEach(async ticket_model => {
                var results = ''
                try {
                    var result = await (ticket_model.update({
                                                tick_description,
                                                tick_dtcreation,
                                                tick_liveevents,
                                                tick_valor,
                                                tick_cupon
                                            }));
                    results = 'Ticket actualizado correctamente';
                } catch (e) {
                    results = e.parent.detail;
                }
                resolve(results)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve("Ticket no encontrado")
        })
    }
}

async function deleteTicket(req, res)
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    var tick_ide = req.params.tick_ide;
    return new Promise(async(resolve) => {
        try{
            var result = await (ticket_model.destroy({
                where: {
                    tick_ide
                }
            }));
            if (result == 1) {
                resolve('Ticket eliminado correctamente')
            } else {
                resolve('Ticket no encontrado')
            }
        } catch (e) {
            resolve('Hubo errores en la eliminación del Ticket')
        }
    })
}

async function listTicket(req, res) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }

    return new Promise(async(resolve) => {
        var result = await (ticket_model.findAll())
        var ticket = {};
        var count_ticket = result.length;
        if (count_ticket > 0) {
            for (var i = 0; i < result.length; i++) {
                var result_liveevents= await (liveevents_model.findAll({ where: { live_ide: result[i].tick_liveevents } }))
                var result_codepromotion= await (codepromotion_model.findAll({ where: { copr_ide: result[i].tick_cupon } }))

                ticket[i] = {};
                ticket[i].ide = result[i].tick_ide;
                ticket[i].description = result[i].tick_description;
                ticket[i].dtcreation = result[i].tick_dtcreation;
                ticket[i].liveevents = result[i].tick_liveevents;
                ticket[i].valor = result[i].tick_valor;
                ticket[i].cupon = result[i].tick_cupon;
                ticket[i].liveevents = {};
                ticket[i].liveevents.description = result_liveevents[0].live_description;
                ticket[i].codepromotion = {};
                ticket[i].codepromotion.description = result_codepromotion[0].copr_description;
            }
            resolve(ticket)
        } else {
            resolve('No hay ningún ticket para mostrar')
        }   
    })
}

async function getTicketById(req, id) 
{
    var token = req.headers.authentication
    var result_token = await(checkToken(token))
    if (result_token == 'Token inválido') {
        return result_token
    }
    var tick_ide = id;
    return new Promise(async(resolve) => {
        var result = await (ticket_model.findAll({ where: { tick_ide:  tick_ide } }))
        var count_ticket = result.length;
        if (count_ticket > 0) {
            resolve(result)
        } else {
            resolve('No hay ningún ticket para mostrar')
        }
        return result
    })
}

module.exports.createTicket = createTicket
module.exports.updateTicket = updateTicket
module.exports.deleteTicket = deleteTicket
module.exports.listTicket = listTicket
module.exports.getTicketById = getTicketById