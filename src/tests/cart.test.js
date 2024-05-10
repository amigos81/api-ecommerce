require('../models')
const request = require("supertest")
const app = require('../app')
const Product = require("../models/Product")

const BASE_URL = '/api/v1/cart'

let TOKEN
let userId
let productBody
let product
let cartId
let cart

beforeAll(async () => {
    const user = {
        email: "sis.duar@gmail.com",
        password: "123456"
    }

    const res = await request(app)
        .post('/api/v1/users/login')
        .send(user)

    // console.log(res.body)

    TOKEN = res.body.token
    userId = res.body.user.id

    productBody = {
        title: 'laptop',
        description: "laptop description",
        price: 999.99
    }

    product = await Product.create(productBody)
    // console.log(res.body)
})

test("POST -> 'BASE_URL', should return status code 201, and res.body.quantity === cart.quantity", async () => {

    cart = {
        quantity: 5,
        productId: product.id
    }

    const res = await request(app)
        .post(BASE_URL)
        .send(cart)
        .set("Authorization", `Bearer ${TOKEN}`)

    cartId = res.body.id

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.quantity).toBe(cart.quantity)

})


// test("GET -> URL_BASE, should return statusCode 200, and res.body.lenght === 1", async () => {

//     const res = await request(app)
//         .get(URL_BASE)
//         .set('Authorization', `Bearer ${TOKEN}`)

//     expect(res.statusCode).toBe(200)
//     expect(res.body).toBeDefined()
//     expect(res.body).toHaveLength(1)

// })

// test('GET -> URL_BASE/:id shoould return statusCode 200, and res.body.quantity ==== cart.quantity', async () => {

//     const res = await request(app)
//         .get(`${URL_BASE}/${cartId}`)
//         .set('Authorization', `Bearer ${TOKEN}`)

//     expect(res.statusCode).toBe(200)
//     expect(res.body).toBeDefined()
//     expect(res.body.quantity).toBe(cart.quantity)

// })


// test("PUT -> URL_BASE/:id, should return status code 200, and res.body.quantity === bodyUpdate.quantity", async () => {

//     const bodyUpdate = { quantity: 6 }
//     const res = await request(app)
//         .put(`${URL_BASE}/${cartId}`)
//         .send(bodyUpdate)
//         .set('Authorization', `Bearer ${TOKEN}`)


//     expect(res.statusCode).toBe(200)
//     expect(res.body).toBeDefined()
//     expect(res.body.quantity).toBe(bodyUpdate.quantity)
// })

// test("Delete 'URL_BASE/:id', should return statusCode 204", async () => {
//     const res = await request(app)
//         .delete(`${URL_BASE}/${cartId}`)
//         .set('Authorization', `Bearer ${TOKEN}`)

//     expect(res.statusCode).toBe(204)

//     await product.destroy()
// })





