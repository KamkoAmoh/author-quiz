import server from './Server.route';

const postData = async (url: string = server, data: object) => {
  const res = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
  return await res.json();
}

export default postData;