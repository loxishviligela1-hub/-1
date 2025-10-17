
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const playersFile = path.join(__dirname, 'players.json');


app.use(bodyParser.json());


app.get('/about', (req, res) => {
    res.json({
        name: "Gela",
        surname: "Loxishvili",
        hobbies: ["football", "coding", "reading"]
    });
});


async function readPlayers() {
    try {
        const data = await fs.readFile(playersFile, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}


async function writePlayers(players) {
    await fs.writeFile(playersFile, JSON.stringify(players, null, 2));
}


app.get('/players', async (req, res) => {
    const players = await readPlayers();
    const { nation } = req.query;

    if (nation) {
        const filtered = players.filter(p => p.nation.toLowerCase() === nation.toLowerCase());
        return res.json(filtered);
    }

    res.json(players);
});


app.post('/players', async (req, res) => {
    const { name, surname, nation, age, club } = req.body;

 
    if (!name || !surname || !nation || !age || !club) {
        return res.status(400).json({ error: "All fields are required: name, surname, nation, age, club" });
    }

    const players = await readPlayers();

    const newPlayer = {
        id: players.length ? players[players.length - 1].id + 1 : 1,
        name,
        surname,
        nation,
        age,
        club
    };

    players.push(newPlayer);
    await writePlayers(players);

    res.status(201).json(newPlayer);
});


app.delete('/players/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    let players = await readPlayers();

    const index = players.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: "Player not found" });

    const deletedPlayer = players.splice(index, 1)[0];
    await writePlayers(players);

    res.json(deletedPlayer);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
