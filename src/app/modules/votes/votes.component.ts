import { Component, OnInit } from '@angular/core';
import {VotesService} from '../../services/votes/votes.service';
import {NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  public topVote;
  public topVoteMonthly;

  constructor(public votesService: VotesService, private titleService: Title) {
    this.titleService.setTitle('Over2Craft - Votes');
  }

  ngOnInit(): void {
    this.votesService.topVote().subscribe((data) => {
      console.log(data);
      this.topVote = data;
    });

    this.votesService.topVoteMonthly().subscribe((data) => {
      this.topVoteMonthly = data;
    });
  }

// Preserve original property order
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

// Order by ascending property value
  valueDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return b.value.localeCompare(a.value);
  }

// Order by descending property key
  keyDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  public vote(event): void {
    event.preventDefault();
    const input = document.getElementById('player') as HTMLInputElement;
    document.getElementById('vote-response').innerText = 'Chargement...';
    this.votesService.voteOnMinecraftServerOrg(input.value)
      .subscribe((data) => {
        this.voted(data);
      });
  }

  public voted(data): void {
    document.getElementById('vote-response').innerText = data.message;
  }

}
