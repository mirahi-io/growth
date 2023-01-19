import axios from "axios";

export default function handler(req, res) {
    console.log(req)
    axios({
        method: "post",
        url: "https://www.growth.mirahi.cloud/",
        data: {username: 'admin', password: 'dockside'},
        headers: { "Content-Type": "application/x-www-form-urlencoded",  },
        withCredentials: true,
    })
        .then(function (response) {
            res.status(200).json(response)
            // axios.get(`https://www.growth.mirahi.cloud/containers/create?name=tim&profile=01-dockside-own-ide&runtime=runc&network=bridge&private=0&access=%7B%22dockside%22%3A%22developer%22%2C%22passthru%22%3A%22owner%22%2C%22ide%22%3A%22developer%22%7D&viewers&developers&description`).then(()=>res.status(200)).catch(console.log)
        })
        .catch(function (response) {
            res.status(500).json(response)
        });
}
