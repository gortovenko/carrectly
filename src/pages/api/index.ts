// import NextCors from 'nextjs-cors';
import axios from 'axios';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req: any, res: any) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  try {
    console.log('sending order', req.body);
    // const data = await axios.post('http://localhost:1337/wpbookings/neworder', {
    //   param: req.body,
    // });
    const data = await axios.post(
      'https://carrectly-admin-staging.herokuapp.com/wpbookings/neworder',
      {
        param: req.body,
      }
    );
    console.log('data from server', data);
    res.status(200).send(data.statusText);
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}

export default handler;
