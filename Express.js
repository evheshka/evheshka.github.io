// Express.js (или в отдельном monobank.js)
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

const MONOBANK_TOKEN = process.env.MONOBANK_TOKEN;

// Маршрут для обработки покупки
app.post('/buy', async (req, res) => {
    const { accountId, amount } = req.body;

    try {
        // Здесь можно добавить логику для создания платежа
        // Например, получение выписки или проверка доступного баланса
        // Поскольку Monobank API не предоставляет явного метода для создания платежей, используйте другую логику

        // Временно используем getClientInfo как пример
        const response = await axios.get('https://api.monobank.ua/personal/client-info', {
            headers: { 'X-Token': MONOBANK_TOKEN }
        });

        const clientData = response.data;
        console.log('Информация о клиенте:', clientData);

        res.json({ status: 'success', message: 'Покупка успешно завершена!' });
    } catch (error) {
        console.error('Ошибка при выполнении покупки:', error);
        res.status(500).json({ status: 'error', message: 'Не удалось завершить покупку' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
