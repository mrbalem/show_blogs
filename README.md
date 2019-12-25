## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### npm update

for resolv err of dependency

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### using useService

to use the hoosk useService that is used to make consume API rest https.

 ``` javascript
      
      import React, { useEffect } from 'react'
      import useService from '../service/useService';
      
      const nameComponent = () => {
        
        //inicializamos el servicio
        // datas, contendra el resultado de la peticion
        // setConfig, sera el que realize la peticion con los parametros necesarios
        
        const [datas, setConfig] = useService();
        
        // realizamos una peticion antes que el componente se cargue
        
        useEffect(() => {
              
              //por defecto setConfig resive como unico parametro un objeto
              setConfig({
                    type: 'GET' // type es el tipo de petecion que se va a realizar 'GET', 'POST', 'UPDATE', 'DELETE'
                    urls: 'https://wwww.domain.com/api/getData' // urls, es la url del servicio API rest
                    parameters: {            // parameters, seran los paratros que se enviara al servidor si se realiza una
                        name: 'name'          // una peticion get sin parametros se puede obviar
                    }
                    isrequest: true    // isrequest, por defecto es false ya que asi evitamos
                                        // cuando inicialicemos el servicio no realice ninguna petición.
              })
              
        
        
        }, [datas, setConfig])
        
          //debug 
          
          console.log(datas)
          
          
        return  (
            <div>
            hola mundo
            </div>
        )
      
      }
 
 ```
