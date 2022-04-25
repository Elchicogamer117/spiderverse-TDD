describe("Unit test for Spiderman class", () => {
      test('1) Create an spiderman object', () => {
            //instanciamos objeto
            const andrewGarfield = new Spiderman('The amazing spiderman', 31, 'Andrew Garfield', 2, 'Sony')

            //Validacion
            expect(andrewGarfield.name).toBe('The amazing spiderman')
            expect(andrewGarfield.age).toBe(25)
            expect(andrewGarfield.actor).toBe('Andrew Garfield')
            expect(andrewGarfield.movies).toBe(2)
            expect(andrewGarfield.studio).toBe('Sony')
      });
})