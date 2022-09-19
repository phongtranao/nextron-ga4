import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
// import ua from 'universal-analytics';

function Home() {
    const measurement_id = `G-CLHX8VZFZ3`;
    const api_secret = `zDCU6l7ZS_-jpxSqemJyew`;

    fetch(`https://analytics.google.com/g/collect?v=2&tid=${measurement_id}&gtm=2oe9e0&_p=296106398&cid=567085814.1663226662&ul=en&sr=2560x1440&uaa=x86&uab=64&uafvl=Google%2520Chrome%3B105.0.5195.125%7CNot)A%253BBrand%3B8.0.0.0%7CChromium%3B105.0.5195.125&uamb=0&uam=&uap=macOS&uapv=12.5.1&uaw=0&_z=ccd.v9B&sid=1663584410&sct=5&seg=1&dl=http%3A%2F%2Flocalhost%2Fnextron-ga4%2Fresources%2Fga.html%3F_ijt%3D9uhpq575gmhchkr0oth58hs9io&dt=Title%20APPHOME&_s=1`, {
        method: "POST",
        body: "en=page_view&_ee=1\n" +
            "en=scroll&epn.percent_scrolled=90&_et=11",
    });

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
