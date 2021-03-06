import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** My API Class
 * 
 * Static class tying together methods used to get/send to the API.
 * 
 */
class Api {

    // token for interacting with API
    static token;

    static async request(endpoint, data = {}, method = 'get') {
        console.debug('API Call:', endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${Api.token}`};
        const params = (method === 'get')
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch(err) {
            console.error('API Error:', err.message);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    /** --- API Routes --- */

    // Get current user
    static async getCurrentUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    // Get token for login from username and password
    static async login(data) {
        let res = await this.request('auth/token', data, 'post');
        return res.token;
    }

    // Signup for site
    static async signup(data) {
        let res = await this.request('auth/register', data, 'post');
        return res.token;
    }

    // Save user profile page
    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, 'patch');
        return res.user;
    }

    // Get player names
    static async getPlayers(team) {
        let res = await this.request(`teams/${team}`);
        return res.team;
    }

    // Get team logos
    static async getTeamLogos(team, teamId) {
        let res = await this.request(`teams/${team}/${teamId}`);
        return res.teamLogo;
    }

    // Get team scores
    static async getLatestGame(teamId) {
        let res = await this.request(`games/${teamId}`);
        return res.latestGame;
    }

    // Get team news
    static async getTeamNews(team) {
        let res = await this.request(`news/${team}`);
        return res.teamNews;
    }
}

export default Api;