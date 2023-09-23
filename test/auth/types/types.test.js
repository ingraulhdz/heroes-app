import { types } from "../../../src/auth/types/types"

describe('test on types.js', () => { 

    const myTypes ={

        login: '[Auth] Login',
        logout: '[Auth] Logout'
    
    }
    test('should return the right types', () => { 

        expect(types).toEqual(myTypes)

     })
 })