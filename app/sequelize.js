// DB

import Sequelize from 'sequelize';
const initDb= async()=> {
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres')

sequelize

    .authenticate()

    .then(() => {

        console.log('Connection has been established successfully.');

    })

    .catch(err => {

        console.error('Unable to connect to the database:', err);

    });


const queryInterface = sequelize.getQueryInterface();
 await queryInterface.sequelize.query(`
   
  
  
CREATE SCHEMA IF NOT EXISTS mapping;
  
  
CREATE TABLE IF NOT EXISTS mapping.calculation_field_mapping (
value_path_mapping_json_key varchar NOT NULL,
value_path_mapping_json_key_description varchar NOT NULL,
value_description varchar NOT NULL,
flora_value varchar NOT NULL,
mapping_value varchar NOT NULL,
PRIMARY KEY (value_path_mapping_json_key, flora_value)
);
  

INSERT INTO mapping.calculation_field_mapping
(value_path_mapping_json_key, value_path_mapping_json_key_description, value_description, flora_value, mapping_value) 
VALUES 
('data_as_json_direct.subjectInfo[0].subjectDetails.gender', 'Пол', 'Мужской', '0', 'male'),
('data_as_json_direct.subjectInfo[0].subjectDetails.gender', 'Пол', 'Женский', '1', 'female'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].city', 'Город', 'Париж', 'Париж', 'PR'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].city', 'Город', 'Ватикан', 'Ватикан', 'VT'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].city', 'Город', 'Самарканд', 'Самарканд', 'SMR'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].country', 'Страна', 'Россия', 'Россия', 'RU'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].country', 'Страна', 'США', 'США', 'USA'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].country', 'Страна', 'Нолдор', 'Нолдор', 'NL'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].region', 'Регион', 'МОСКВА Г', 'Москва', '01'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].region', 'Регион', 'КАРЕЛИЯ РЕСП', 'Карелия', '02'),
('data_as_json_direct.subjectInfo[0].subjectDetails.address[0].region', 'Регион', 'КЕМЕРОВСКАЯ ОБЛ', 'Кемерово','03' ) on conflict do nothing;


  `)
  
}
export default initDb
