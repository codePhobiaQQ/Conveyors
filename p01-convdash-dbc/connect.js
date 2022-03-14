const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
   host: '10.241.134.75',
  //host: 'localhost',
  database: 'mc23',
  password: 'postgres',
  port: 5432,
});
const getConveyors = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT full_name FROM signal_data.conveyors', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getConvHours = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT value FROM signal_data.dashboard', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

// const getConveyors = () => {
//   return new Promise(function(resolve, reject) {
//     pool.query('SELECT name FROM signal_data.conveyors ORDER BY id ASC', (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(results.rows);
//     })
//   })
// }

module.exports = {
  getConveyors,
  getConvHours,
}
