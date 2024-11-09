require('dotenv').config();
const axios = require('axios');

const MONOBANK_TOKEN = process.env.MONOBANK_TOKEN;
const API_URL = 'https://api.monobank.ua/personal';

/**
 * Получение информации о клиенте
 */
async function getClientInfo() {
    try {
        const response = await axios.get(`${API_URL}/client-info`, {
            headers: { 'X-Token': MONOBANK_TOKEN }
        });
        console.log('Информация о клиенте:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении информации о клиенте:', error);
    }
}

/**
 * Установка WebHook
 * @param {string} url - URL для отправки уведомлений о событиях
 */
async function setWebHook(url) {
    try {
        const response = await axios.post(`${API_URL}/webhook`, {
            webHookUrl: url
        }, {
            headers: { 'X-Token': MONOBANK_TOKEN }
        });
        console.log('Webhook установлен:', response.data);
    } catch (error) {
        console.error('Ошибка при установке WebHook:', error);
    }
}

/**
 * Получение выписки по счету
 * @param {string} account - Идентификатор счета
 * @param {number} from - Начало периода (Unix time)
 * @param {number} to - Конец периода (Unix time)
 */
async function getStatement(account, from, to) {
    try {
        const response = await axios.get(`${API_URL}/statement/${account}/${from}/${to}`, {
            headers: { 'X-Token': MONOBANK_TOKEN }
        });
        console.log('Выписка по счету:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении выписки по счету:', error);
    }
}

// Пример использования функций
getClientInfo(); // Получить информацию о клиенте
setWebHook('https://example.com/webhook'); // Установить WebHook для уведомлений
getStatement('0', 1609459200, 1612137600); // Получить выписку по умолчанию за январь 2021 года
