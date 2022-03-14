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
    pool.query('SELECT full_name, id FROM signal_data.conveyors', (error, results) => {
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

const postReport = (report) => {
  console.log(report)

  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM signal_data.data_real WHERE signal = 110 LIMIT 5', (error, results) => {
      if (error) {
        reject(error)
      }
      const sum = results.rows.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.value
      }, 0)

      resolve({result: results.rows, sum});
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
  postReport
}
