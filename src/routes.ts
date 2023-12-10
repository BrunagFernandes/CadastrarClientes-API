import{ FastifyPluginOptions, FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerControler} from "./controlers/createCustomerControler"
import {ListCustomerController} from "./controlers/ListCustormerController"
import{deleteCustomerController} from "./controlers/deleteCustomerController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply)=> {
        return{ ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateCustomerControler().handle(request, reply)
    })

    fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new ListCustomerController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new deleteCustomerController().handle(request, reply)
    })

}