const server = require('../src/app');
const session = require('supertest');
const {myFavorites} = require('../src/controllers/handleFavorites')
const agent = session(server);

const character =  {
    id: 999,
    name: "New Character",
    status: "Alive",
    species: "Unknown",
    gender: "Male",
 }


describe('Test de RUTAS', ()=> {
    describe('GET character/:id',()=>{
        it('Responde con status: 200', async()=>{
            await agent.get('/characters/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const response = await agent.get('/characters/1');
            expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })
        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/characters/0').expect(404)
        })
    })
    describe('Get /login', ()=>{
        it('Login autorizado', async()=>{
            const response = await agent.get(`/login/?email=ejemplo@gmail.com&password=123456`);
            const {access} = response.body
            expect(access).toBe(true)
        })
        it('login sin autorizacion', async()=>{
            const response = await agent.get('/login/?email=error@gmail.com&password=noexiste')
            const {access} = response.body
            expect(access).toBe(false)
        })
    })
    describe('POST favoritos',()=>{
        it('Post favoritos', async ()=>{
            
            const response = await agent.post('/favorites').send(character)
            expect(response.body).toEqual([character])
        })
    })
    describe('DELETE favoritos', ()=>{
        it('delete favoritos', async()=>{
        const base_datos = [...myFavorites]
        const response = await agent.delete('/favorites/999')
        expect(response.body).toHaveLength(base_datos.length - 1)
        })
        
    })
})