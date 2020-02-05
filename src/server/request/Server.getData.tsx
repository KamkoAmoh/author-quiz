import server from './Server.route';

const getData = async (url: string = server) => {
  const data = await fetch(url, {headers: {'Content-Type': 'appliction/json'}});
  const res = await data.json();

  return res;
}

export default getData;
