const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Маршрут для обработки покупки
app.post('/buy', async (req, res) => {
    const { accountId, amount } = req.body;

    // Здесь вы можете использовать getStatement или другую логику для обработки покупки
    console.log(`Покупка на сумму: ${amount} с аккаунта: ${accountId}`);
    res.json({ status: 'success', message: 'Покупка успешно обработана' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
