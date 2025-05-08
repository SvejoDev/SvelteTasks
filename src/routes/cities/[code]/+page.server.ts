export async function load({ params }) {
    const code = params.code;
    console.log(code)
    const url = `https://data.egyweb.se/api/world/getcities.php?code=${code}`;
    const respone = await fetch(url);
    const list = await respone.json();
    return list ;
}