import { Client } from '../client/Client';
import { APIPlayerClan } from '../types';
import { Badge } from './Badge';

export class PlayerClan {
	/** Name of the clan. */
	public name: string;

	/** Tag of the clan. */
	public tag: string;

	/** Level of this clan. */
	public level: number;

	/** Badge of this clan. */
	public badge: Badge;

	public constructor(private readonly _client: Client, data: APIPlayerClan) {
		this.name = data.name;
		this.tag = data.tag;
		this.level = data.clanLevel;
		this.badge = new Badge(data.badgeUrls);
	}

	/** Get clan details for the player's clan. */
	public fetch() {
		return this._client.getClan(this.tag);
	}
}
