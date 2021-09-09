"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DJSPoster = void 0;
const BasePoster_1 = require("./BasePoster");
/**
 * Auto-Poster For Discord.JS
 */
class DJSPoster extends BasePoster_1.BasePoster {
    /**
     * Create a new poster
     * @param token Top.gg API Token
     * @param client Your Discord.JS Client
     * @param options Options
     */
    constructor(token, client, options) {
        if (!token)
            throw new Error('Top.gg Tokeni Eksik');
        if (!client)
            throw new Error('Eksik client');
        const Discord = require('discord.js');
        if (!(client instanceof Discord.Client))
            throw new Error('Bir discord.js client değil.');
        super(token, options);
        this.client = client;
        this._binder({
            clientReady: () => this.clientReady(),
            waitForReady: (fn) => this.waitForReady(fn),
            getStats: () => this.getStats()
        });
    }
    clientReady() {
        return this.client.ws.status === 0;
    }
    waitForReady(fn) {
        this.client.once('ready', () => {
            fn();
        });
    }
    async getStats() {
        var _a;
        return {
            serverCount: this.client.guilds.cache.size,
            shardId: (_a = this.client.shard) === null || _a === void 0 ? void 0 : _a.ids[0],
            shardCount: this.client.options.shardCount || 1
        };
    }
}
exports.DJSPoster = DJSPoster;
