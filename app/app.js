// Express
import express, { Router } from 'express';
const app = express()
import mappingObject from './mappingObject.js';
import mapFieldsRecursively from "./mapping.js"
import getQueryResult from './dbQuery.js';
// Router
const router = Router()
router.get('/', (_req, res) => {
  res.status(200).json({
    message: mappingObject,
  })
})
router.get('/*', (_req, res) => {
  res.status(400).json({
    error: 'Запрос не может быть обработан, маршрут не найден'
  })
})

// Routes
app.use('/', router)

app.listen(3001, () => {
  console.log('Сервер запущен')
})

let obj = await getQueryResult()

mapFieldsRecursively(mappingObject, obj)

console.log(JSON.stringify(mappingObject))