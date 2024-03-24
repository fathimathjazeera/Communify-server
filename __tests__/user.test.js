const {register}= require('../controllers/userController/user')
const User = require('../models/userSchema')

jest.mock('../models/userSchema')


const request = {
    body:{
        email:'fake_password',
        password:'fake_password'
    }
}
const response = {
    status: jest.fn((x)=> x),
    json: jest.fn((x) => x)
}

it('should send a status code of 400 when user exists',async()=>{
    User.findOne.mockImplementationOnce(()=>({
        id:1,
        email:'email',
        password:'password'
    }))
  await  register(request, response)
  expect(response.status).toHaveBeenCalledWith(400)
})