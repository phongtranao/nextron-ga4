import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import ua from 'universal-analytics';

function Next() {
    const measurement_id = `G-CLHX8VZFZ3`;
    const api_secret = `zDCU6l7ZS_-jpxSqemJyew`;
    var visitor = ua(measurement_id, uuidv4());
    visitor.pageview("/", "http://localhost.com", "Welcome").send();
    visitor.screenview("Home Screen", "App Name").send()


    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
        method: "POST",
        body: JSON.stringify({
            client_id: uuidv4(),
            "events": [{
                "name": "refund",
                "params": {
                    "currency": "USD",
                    "value": "9.99",
                    "transaction_id": "ABC-123"
                }
            }]
        })
    });
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/home'>
          <a className='btn-blue'>Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Next
