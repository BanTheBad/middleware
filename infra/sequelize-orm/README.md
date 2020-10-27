## Generating models
- The folder path can be specified when generating a model e.g
`npx sequelize-cli model:generate --models-path src/victims --name Pao --attributes firstName:string,lastName:string,email:string`

So, no need to specify **models-path** in the **.sequelizerc** file. See `npx sequelize-cli --help` for more information
