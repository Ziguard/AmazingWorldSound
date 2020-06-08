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
      url : 'https://group6-s3.s3.amazonaws.com/ouais-mais-cest-pas-toi-qui-decide-meme-fanta.mp3',
      name: 'fanta',
      artist: 'ouais-mais-cest-pas-toi-qui-decide'
    }
  ];

  getFiles() {
    return of(this.files);
  }


}
