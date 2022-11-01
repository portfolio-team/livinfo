import { Artist } from '../models';

const baseUrl = 'http://127.0.0.1:8000'

export class ArtistService {
  fetchAll(unit?: number, limit?: number): Promise<Artist[]> {
    const url = new URL(`${baseUrl}/api/artist`);
    if (unit !== undefined) {
      url.searchParams.append('unit', `${unit}`);
      url.searchParams.append('limit', `${limit}`);
    }

    return fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  }

  fetch(id: string): Promise<Artist> {
    const url = new URL(`${baseUrl}/api/artist/${id}`);

    return fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  }

  constructor() {}
}