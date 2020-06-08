import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor() { }

  files: any = [
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect',
      artist: ' Ed Sheeran'
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan'
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Penny Lane',
      artist: 'The Beatles'
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://group6-s3.s3.amazonaws.com/euh-nique-ta-mere-marine-le-pen.mp3',
      name: 'euh-nique-ta-mere',
      artist: 'marine-le-pen',
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://group6-s3.s3.amazonaws.com/sardoche-mais-voila-mais-cetait-sur-en-fait_s9qhFsx.mp3',
      name: 'mais-voila-mais-cetait-sur-en-fait',
      artist: 'sardoche',
    },
    {
      url: 'https://group6-s3.s3.amazonaws.com/honteux_ACACNOH.mp3',
      name: 'honteux',
      artist: 'acacnoh'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/denis-brogniart-ah-original.mp3',
      name: 'ah',
      artist: 'denis-brogniart'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/jecodeaveclecul.mp3',
      name: 'jecodeaveclecul',
      artist: 'jecodeaveclecul'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/jesuispasvenupoursouffrir.mp3',
      name: 'jesuispasvenurpoursouffrir',
      artist: 'jesuispasvenurpoursouffrir'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/alerte-au-gogole.mp3',
      name: 'alerte',
      artist: 'gogole'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/mlg-airhorn.mp3',
      name: 'mlg-airhorn',
      artist: 'mlg-airhorn'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/ouais-mais-cest-pas-toi-qui-decide-meme-fanta.mp3',
      name: 'fanta',
      artist: 'ouais-mais-cest-pas-toi-qui-decide'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/snoop-dogg-smoke-weed-everyday.mp3',
      name: 'smoke-weed-everyday',
      artist: 'snoop-dogg'
    },
    {
      url : 'https://group6-s3.s3.amazonaws.com/coucou.mp3',
      name: 'coucou',
      artist: 'coucou'
    }
  ];

  getFiles() {
    return of(this.files);
  }


}
